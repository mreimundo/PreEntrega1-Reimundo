import "./CartForm.css"
import { Formik, Field, Form } from 'formik';


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
            <Form id="cartForm">
                <label className="formLabel" htmlFor="firstName">Nombre</label>
                <Field className="formField" id="firstName" name="firstName" placeholder="Martin" />
                <label className="formLabel" htmlFor="lastName">Apellido</label>
                <Field className="formField" id="lastName" name="lastName" placeholder="Reimundo" />
                <label className="formLabel" htmlFor="phone">Teléfono/Celular</label>
                <Field className="formField" id="phone" name="phone" placeholder="123456789"/>
                <label className="formLabel" htmlFor="email">Email</label>
                <Field
                className="formField" 
                id="email"
                name="email"
                placeholder="example@gmail.com"
                type="email"
                />
                <button id="formButton" type="submit">Finalizar compra</button>
            </Form>
        </Formik>
    </div>)
}


export default CartForm