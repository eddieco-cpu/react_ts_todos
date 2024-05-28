import { Dayjs } from 'dayjs';

export function generateUniqueId(): string {
    const uniquePart = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substring(2, 15);
    return '_' + uniquePart + randomPart;
  }

export  const formatDate = (date: Dayjs, formatStr?: string): string => date.format(formatStr || 'YYYY/MM/DD HH:mm:ss')