export function StoreToLocalStorage(key, value, expireOn) {
  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: new Date(expireOn).getTime(),
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function GetFromLocalStorage(key) {
  const itemStr = localStorage.getItem(key);
  // if the item doesn't exist, return {}
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return {}
    localStorage.removeItem(key);
    return {};
  }
  return item.value;
}

export function RemoveFromLocalStorage(key) {
  localStorage.removeItem(key);
}
