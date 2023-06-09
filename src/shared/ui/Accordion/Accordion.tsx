import { FC, ReactNode, useState } from 'react';

interface IAccordionProps {
  title: string;
  icon?: JSX.Element;
  children: ReactNode;
  panelStyle?: string;
  customTitle?: JSX.Element;
}

const panelStyleDefault = 'panel shadow_default card block_column gap_5 p0 p_15Y br_20';

const Accordion: FC<IAccordionProps> = ({ title, children, icon, panelStyle, customTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  function open() {
    setIsOpen(!isOpen);
  }
  
  return (
    <div className='relative' style={ isOpen ? { zIndex: 100 } : {} }>
      { isOpen ? <div className='accordion__overlay' onClick={ open }></div> : <></> }
      
      <div className='accordion text_active-h image_centerY gap_8' onClick={ open }>
        { customTitle
          ? customTitle
          : (
            <>
              { icon ? icon : <></> }
              <a className='accordion__open'>{ title }</a>
            </>
          )
        }
      </div>
      
      { isOpen ? <div className={ [panelStyleDefault, panelStyle].join(' ') }>{ children }</div> : <></> }
    </div>
  );
};

export default Accordion;