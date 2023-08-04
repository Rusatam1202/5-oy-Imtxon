import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  AuthorWrapper,
  AuthorWrapperForm,
  AuthorTitle,
  AuthorForm,
  AuthorInput,
  AuthorSelekt,
  AuthorTextarea,
  AuthorButton,
  AuthorWrapperImg,
  AuthorImginput,
  AuthorSelekt2,
} from "./AddBookStyled";
import AuthorImg from "../../assets/images/AuthorImg.png";
import axios from "axios";

function AddBook() {
  const localData = localStorage.getItem("token");
  const titleRef = useRef();
  const pagesRef = useRef();
  const yearRef = useRef();
  const priseRef = useRef();
  const genreRef = useRef();
  const authorRef = useRef();
  const bioRef = useRef();
  const imgRef = useRef();

  const hendleSubmit = (evt) => {
    evt.preventDefault();

    const formDate = new FormData();

    formDate.append("title", titleRef.current?.value);
    formDate.append("page", pagesRef.current?.value);
    formDate.append("year", yearRef.current?.value);
    formDate.append("price", priseRef.current?.value);
    formDate.append("genre_id", genreRef.current?.value);
    formDate.append("author_id", authorRef.current?.value);
    formDate.append("description", bioRef.current?.value);
    formDate.append("image", imgRef.current?.files[0]);
    console.log(genreRef.current?.value);

    fetch("http://localhost:5000/book", {
      method: "POST",
      headers: {
        Authorization: localData,
      },
      body: formDate,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <AuthorWrapper>
      <AuthorWrapperImg>
        <label htmlFor="img">
          <img src={AuthorImg} width="315" height="428" alt="AuthorImg" />
          <AuthorImginput ref={imgRef} type="file" id="img" name="img" />
        </label>
      </AuthorWrapperImg>
      <AuthorWrapperForm>
        <AuthorTitle>Add book</AuthorTitle>
        <p>
          Already have an account?
          <NavLink to={"/"}>Log_out</NavLink>
        </p>
        <AuthorForm onSubmit={hendleSubmit}>
          <AuthorInput ref={titleRef} type="text" placeholder="Title" />
          <AuthorInput ref={pagesRef} type="text" placeholder="Pages" />
          <AuthorInput ref={yearRef} type="number" placeholder="Year" />
          <AuthorInput ref={priseRef} type="number" placeholder="Price" />
          <AuthorSelekt ref={genreRef}>
            <option hidden>Genre</option>
            <option value={1} id="genre-id">
              Temuriylar davri{" "}
            </option>
            <option value={2} id={2}>
              Jadid adabiyoti{" "}
            </option>
            <option value={3} id={3}>
              Sovet davri{" "}
            </option>
            <option value={4} id={4}>
              Mustaqillik davri
            </option>
          </AuthorSelekt>
          <AuthorSelekt2 ref={authorRef}>
            <option hidden>Author</option>
            <option value={1} id="genre-id">
              Temuriylar davri{" "}
            </option>
            <option value={2} id={2}>
              Jadid adabiyoti{" "}
            </option>
            <option value={3} id={3}>
              Sovet davri{" "}
            </option>
            <option value={4} id={4}>
              Mustaqillik davri
            </option>
          </AuthorSelekt2>
          <AuthorTextarea ref={bioRef} placeholder="Bio" />
          <AuthorButton type="submit">Create</AuthorButton>
        </AuthorForm>
      </AuthorWrapperForm>
    </AuthorWrapper>
  );
}

export default AddBook;
