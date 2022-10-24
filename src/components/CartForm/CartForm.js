import "./CartForm.css"
import { Formik, Field, Form } from 'formik';


const CartForm = ({order}) => {

    return (
    <div>
        <h4>Por favor, complete sus datos</h4>
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
            <Form>
                <label htmlFor="firstName">Nombre</label>
                <Field id="firstName" name="firstName" placeholder="Martin" />
                <label htmlFor="lastName">Apellido</label>
                <Field id="lastName" name="lastName" placeholder="Reimundo" />
                <label htmlFor="phone">Teléfono/Celular</label>
                <Field id="phone" name="phone" placeholder="123456789" />
                <label htmlFor="email">Email</label>
                <Field
                id="email"
                name="email"
                placeholder="example@gmail.com"
                type="email"
                />
                <button type="submit">Finalizar compra</button>
            </Form>
        </Formik>
    </div>)
}


export default CartForm