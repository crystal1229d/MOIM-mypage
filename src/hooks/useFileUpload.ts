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
    return urls
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
