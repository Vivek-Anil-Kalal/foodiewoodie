import navLinks from '../constants'
import SellerButton from './SellerButton'

export const AsideNav = (props) => {

    return (
        <aside className="flex flex-column min-w-[300px] h-screen ">
            <div className="w-full flex flex-col justify-between items-center p-4">
                <ul className="list:none">

                    {
                        navLinks.map((link, index) => (
                            <li key={index} className={`${index !== navLinks.length - 1 ? 'my-5' : 'my-0'} 
                             border-2 border-black p-3 w-[220px] text-center navLinks duration-300 
                             rounded-[15px] bg-[#e1e1e1] text-[1.2rem] font-semibold hover:bg-black hover:text-yellow-300 cursor-pointer ${props.activeComponent === link.id ? "bg-black text-yellow-300" : "bg-[#e1e1e1] text-black"} `}

                                onClick={() => {
                                    props.loadComponent(link.id)
                                    props.showAsActive(link.id)
                                }}
                                activeClassName="active-class" >
                                {link.title}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </aside>
    )

}

export default AsideNav;