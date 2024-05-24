import { useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../remote/firebase'

const MAX_FILES = 3

function useFileUpload() {
  const [files, setFiles] = useState<File[]>(Array(MAX_FILES).fill(null))
  const [filePreviews, setFilePreviews] = useState<string[]>(
    Array(MAX_FILES).fill(''),
  )
  const [uploading, setUploading] = useState(false)
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([])

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newFile = e.target.files ? e.target.files[0] : null
    if (!newFile) return

    // 이미지파일만 업로드 가능 (JPEG, PNG, GIF, BMP 등 모두 포함)
    if (!newFile.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능합니다.')
      return
    }

    const newFiles = [...files]
    const newPreviews = [...filePreviews]

    newFiles[index] = newFile
    newPreviews[index] = URL.createObjectURL(newFile)

    setFiles(newFiles)
    setFilePreviews(newPreviews)
  }

  const uploadFiles = async () => {
    setUploading(true)

    const uploadPromises = files.map(async (file) => {
      if (file === null) return ''
      const storageRef = ref(storage, `reviews/${file.name}`)
      await uploadBytes(storageRef, file)
      return await getDownloadURL(storageRef)
    })

    const urls = await Promise.all(uploadPromises)
    setUploadedUrls(urls.filter((url) => url !== ''))
    setUploading(false)

    return urls // firestore 에 경로 저장을 위해 반환
  }

  return {
    files,
    filePreviews,
    uploading,
    uploadedUrls,
    handleFileChange,
    uploadFiles,
  }
}

export default useFileUpload
