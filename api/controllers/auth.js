import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //Проверка есть ли уже такой пользователь

  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length)
      return res.status(409).json("Пользователь уже существует!");

    //хэш паролей

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("Пользователь создан!");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0)
      return res.status(404).json("пользователь не найден!");

    const isPasswordCurrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCurrect)
      return res.status(400).json("не верный логин или пароль!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];
    res
      .cookie("access__token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("access__token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("Пользователь вышел из сети");
};
