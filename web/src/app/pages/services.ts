export async function getProducts() {
    const res = await fetch(`/api/products`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
  
    return data;
  }
  