export const authenticate = async () => {
  const response = await fetch("/api/auth/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const login = async (email, password) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return await response.json();
};

export const demo = async (email = "demo@user.com", password = "password") => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return await response.json();
};

export const logout = async () => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const signUp = async (
  username,
  email,
  password,
  address,
  city,
  state,
  zipcode,
  phone,
  is_a_chef,
  createdAt
) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
      address,
      city,
      state,
      zipcode,
      phone,
      is_a_chef,
      createdAt,
    }),
  });
  return await response.json();
};

export const chefform = async (
  user_id,
  about,
  service,
  menu,
  pricing,
  available
) => {
  const res = await fetch("/api/auth/chefform", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id,
      about,
      service,
      menu,
      pricing,
      available,
    })
  })
  return await res.json()
};
