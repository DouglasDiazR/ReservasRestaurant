export default function ValidateRegister(user) {
  const nameRegexp = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const dniRegexo = /^\d+$/;
  const passwordRegexp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const errors = {};

  if (!user.name) errors.name = "Campo requerido";
  else if (!nameRegexp.test(user.name))
    errors.name = "El nombre sólo debe contener letras";

  if (!user.email) errors.email = "Campo requerido";
  else if (!emailRegexp.test(user.email))
    errors.email = "Debe ser un correo válido";

  if (!user.birthdate) errors.birthdate = "Campo requerido";
  else if (!isOldEnough(user.birthdate))
    errors.birthdate = "El usurio debe ser mayor de edad";

  if (!user.nDni) errors.nDni = "Campo requerido";
  else if (!dniRegexo.test(user.nDni))
    errors.nDni = "El DNI sólo debe contener números";
  else if (user.nDni.length < 5) errors.nDni = "Numero de DNI no válido";

  if (!user.username) errors.username = "Campo requerido";

  if (!user.password) errors.password = "Campo requerido";
  else if (user.password.length < 7)
    errors.password = "La contraseña debe ser de al menos 7 Caracteres";
  else if (!passwordRegexp.test(user.password))
    errors.password = `La contraseña debe tener al menos una Mayúscula, 
      una Minúscula, un Número y un Caracter Especial`;

  if (!user.confirmPassword) errors.confirmPassword = "Campo requerido";
  else if (user.confirmPassword !== user.password)
    errors.confirmPassword = "Las contraseñas deben coincidir ";

  return errors;
}

const isOldEnough = (userBirthdate) => {
  const birthdate = new Date(userBirthdate);
  const today = new Date();
  const age =
    today.getFullYear() -
    birthdate.getFullYear() -
    (today <
    new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate())
      ? 1
      : 0);
  return age >= 18;
};
