import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
    return (
    <nav style={{display: 'flex', alignItems:'center', justifyContent: 'space-around'}}>
        <h2>Gaming Gear</h2>
        <div>
            <Button label={'Componentes'} background={'rgb(206, 66, 46)'} action={() => console.log('Se muestran los componentes')}/>
            <Button label={'Equipos'} background={'rgb(206, 66, 46)'} action={() => console.log('Se muestran los equipos')}/>
            <Button label={'Ofertas'} background={'rgb(206, 66, 46)'} action={() => console.log('Se muestran las ofertas')}/>
        </div>
        <div><CartWidget/></div>
    </nav>
    )
}

export default Navbar