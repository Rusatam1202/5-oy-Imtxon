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
} from "./AuthorWrapper";
import AuthorImg from "../../assets/images/AuthorImg.png";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

export const AddAuthor = () => {
  const localData = localStorage.getItem("token");

  const FirstRrf = useRef();
  const LasttRrf = useRef();
  const BirthRrf = useRef();
  const DeathRrf = useRef();
  const CountryRrf = useRef();
  const generRrf = useRef();
  const TextAreaRrf = useRef();
  const imgRef = useRef();

  const hendleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("image", imgRef.current?.files[0]);
    formData.append("first_name", FirstRrf.current?.value);
    formData.append("last_name", LasttRrf.current?.value);
    formData.append("date_of_birth", BirthRrf.current?.value);
    formData.append("date_of_death", DeathRrf.current?.value);
    formData.append("country", CountryRrf.current?.value);
    formData.append("bio", TextAreaRrf.current?.value);
    formData.append("genre_id", +generRrf.current.value);
    console.log(generRrf.current?.value);

    //    console.log(formData);
    fetch("http://localhost:5000/author", {
      method: "POST",
      headers: {
        Authorization: localData,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <AuthorWrapper>
      <AuthorWrapperImg>
        <label htmlFor="imgafter">
          <img src={AuthorImg} width="315" height="428" alt="AuthorImg" />
          <AuthorImginput
            type="file"
            id="imgafter"
            name="imgafter"
            ref={imgRef}
          />
        </label>
      </AuthorWrapperImg>
      <AuthorWrapperForm>
        <AuthorTitle>Add author</AuthorTitle>
        <p>
          Already have an account?
          <NavLink to={"/"}>Log_out</NavLink>
        </p>

        <AuthorForm onSubmit={hendleSubmit}>
          <AuthorInput ref={FirstRrf} type="text" placeholder="first_name" />
          <AuthorInput ref={LasttRrf} type="text" placeholder="dast_name" />
          <AuthorInput
            ref={BirthRrf}
            type="number"
            placeholder="date_of_birth"
          />
          <AuthorInput
            ref={DeathRrf}
            type="number"
            placeholder="date_of_death"
          />
          <AuthorInput ref={CountryRrf} type="text" placeholder="country" />
          <AuthorSelekt
            onChange={(evt) => console.log(evt.target.value)}
            name="genre_id"
            ref={generRrf}
          >
            <option hidden>Janer</option>
            <option value={1} name="genre_id" id={1}>
              Temuriylar davri{" "}
            </option>
            <option value={2}>Jadid adabiyoti </option>
            <option value={3}>Sovet davri </option>
            <option value={4}>Mustaqillik davri</option>
          </AuthorSelekt>

          <AuthorTextarea
            ref={TextAreaRrf}
            placeholder="Bio"
            name="bio"
            id="bio"
          />

          <AuthorButton type="submit">Create</AuthorButton>
        </AuthorForm>
      </AuthorWrapperForm>
    </AuthorWrapper>
  );
};
