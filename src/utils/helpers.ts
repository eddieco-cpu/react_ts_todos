export function generateUniqueId(): string {
    const uniquePart = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substring(2, 15);
    return '_' + uniquePart + randomPart;
  }