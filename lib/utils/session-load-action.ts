
export function load(key: string) {
    if (typeof window !== "undefined") {
        const item = sessionStorage.getItem(key);
        return item != null ? JSON.parse(item) : [];
    }


  }
  