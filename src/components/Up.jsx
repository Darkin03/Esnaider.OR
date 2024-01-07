import { IoIosArrowUp } from "react-icons/io";
import { useState, useCallback,useEffect } from "react";

export function Up() {
    const [active, setActive] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleScroll = useCallback(() => {
        const scroll = window.scrollY || document.documentElement.scrollTop;

        if (scroll > 320) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, []);

    const mouseOver = () => {
        setActive(true);
    };

    const mouseOut = () => {
        setActive(false);
    };

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Agrega el event listener cuando el componente se monta
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Elimina el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className={visible ? 'up' : 'inactiveUp'} onClick={scrollUp} onMouseOver={mouseOver} onMouseOut={mouseOut}>
            <IoIosArrowUp id="icon" className={active ? 'activeIcon' : 'icon'} />
        </div>
    );
}
