import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

function formatDatetime(datetime: string): string {
  const date = new Date(datetime)

  const localDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000)

  return format(localDate, 'MMMM d일 EEEE a h시', { locale: ko })
}

export default formatDatetime
