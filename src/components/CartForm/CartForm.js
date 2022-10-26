import "./CartForm.css"
import { Formik, Field, Form } from 'formik';

const validateField = (value, message) => {
    let error
    if(!value){
        error = message
    }
    return error
}

const validateFirstName = (value) => {
    return validateField(value, 'Coloque un nombre')
}

const validateLastName = (value) => {
    return validateField(value, 'Coloque un apellido')
}

const validatePhone = (value) => {
    return validateField(value, 'Coloque un número');
}

const validateEmail = (value) =>  {
    if (!value) {
        return 'Coloque un mail';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'La dirección es inválida';
    }
}

// const checkEmailMatch = (confirmEmail, email) => {
//     if (confirmEmail !== email){
//         return 'Los correos no coinciden'
//     }
// }

// const handleOnChangeConfirmEmail = (value, firstEmail) =>  {
//     console.log(value)
//     console.log()
//     let error = (validateEmail(value))
//     return (!error) ? checkEmailMatch(value, firstEmail) : error
// }

const CartForm = ({order}) => {

    return (
    <div>
        <h3 id="formTitle">Por favor, complete sus datos</h3>
        <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
        }}
        onSubmit={(values) => {
            const buyer = {
                firstName: values?.firstName,
                lastName: values?.lastName,
                phone: values?.phone,
                email: values?.email
            }
            order(buyer)
        }}>
            {({ errors, touched }) => (
                <Form id="cartForm">
                    <label className="formLabel" htmlFor="firstName">Nombre</label>
                    <Field className="formField" id="firstName" name="firstName" placeholder="Martin" validate={validateFirstName}/>
                    {errors.firstName && touched.firstName && <div className="displayError">{errors.firstName}</div>}
                    <label className="formLabel" htmlFor="lastName">Apellido</label>
                    <Field className="formField" id="lastName" name="lastName" placeholder="Reimundo" validate={validateLastName}/>
                    {errors.lastName && touched.lastName && <div className="displayError">{errors.lastName}</div>}
                    <label className="formLabel" htmlFor="phone">Teléfono/Celular</label>
                    <Field className="formField" id="phone" name="phone" placeholder="123456789" validate={validatePhone}/>
                    {errors.phone && touched.phone && <div className="displayError">{errors.phone}</div>}
                    <label className="formLabel" htmlFor="email">Email</label>
                    <Field className="formField" id="email" name="email" placeholder="example@gmail.com" type="email" validate={validateEmail} />
                    {errors.email && touched.email && <div className="displayError">{errors.email}</div>}
                    <label className="formLabel" htmlFor="email">Confirmar email</label>
                    <Field className="formField" id="emailConfirm" name="emailConfirm" placeholder="example@gmail.com" type="email" validate={validateEmail} />
                    {errors.emailConfirm && touched.emailConfirm && <div className="displayError">{errors.emailConfirm}</div>}
                    <button id="formButton" type="submit">Finalizar compra</button>
                </Form>
            )}

        </Formik>
    </div>)
}


export default CartForm