import dayjs from 'dayjs'

type DateType = string | number | Date

export function formatDate(date: DateType, format: string = 'YYYY-MM-DD HH:mm:ss'): string {
  return dayjs(date).format(format)
}
