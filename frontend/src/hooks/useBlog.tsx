import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

type Blogs = [
  {
    id: string;
    title: string;
    content: string;
    date:string
    author: {
      name: string;
    };
  }
];



export function useBlogs () {
  const [blogs, setBlogs] = useState<Blogs>();
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/blog/all`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setBlogs(res.data.blogs);
        setLoading(false);
      });
    }, []);
    return { blogs, loading };
};
