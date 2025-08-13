const LOAD_FACTOR = 0.75;

export default class HashMap {
  constructor() {
    this.capacity = 16;
    this.buckets = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);
    const index = hashCode % this.capacity;

    if (this.buckets[index] === null) {
      this.buckets[index] = [[key, value]];
    } else {
      const bucket = this.buckets[index];
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          return;
        }
      }

      bucket.push([key, value]);
    }
  }

  get(key) {
    const hashCode = this.hash(key);
    const index = hashCode % this.capacity;
    const bucket = this.buckets[index];

    if (bucket !== null) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }

    return null;
  }

  has(key) {
    const hashCode = this.hash(key);
    const index = hashCode % this.capacity;
    const bucket = this.buckets[index];

    if (bucket !== null) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return true;
        }
      }
    }

    return false;
  }

  remove(key) {
    const hashCode = this.hash(key);
    const index = hashCode % this.capacity;
    const bucket = this.buckets[index];

    if (bucket !== null) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          return true;
        }
      }
    }

    return false;
  }

  length() {
    let length = 0;

    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        length += bucket.length;
      }
    });

    return length;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(null);
  }

  keys() {
    let keys = [];

    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        bucket.forEach((entry) => {
          keys.push(entry[0]);
        });
      }
    });

    return keys;
  }

  values() {
    let values = [];

    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        bucket.forEach((entry) => {
          values.push(entry[1]);
        });
      }
    });

    return values;
  }

  entries() {
    let entries = [];

    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        bucket.forEach((entry) => {
          entries.push(entry);
        });
      }
    });

    return entries;
  }
}
