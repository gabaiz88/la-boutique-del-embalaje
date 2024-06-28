import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const CenteredAccordion = () => {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            ¿Ofrecen servicio de entrega a domicilio?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>Si, ofrecemos envío a domicilio dentro de Capital Federal. Consultar por otras zonas.</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            ¿Cuáles son los días y horarios de atención al público en el local?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>Atendedemos de lunes a viernes y los sabados por la mañana</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            ¿Hay algún número de contacto o correo electrónico para consultas relacionadas con el servicio de delivery y horarios?          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>Si, podes llamarnos al 4867-5494 o al 11-6881-3544. También podes dejarnos un mensaje por aquí, en el área de Contacto o enviar un correo a boutiquedelembalaje@gmail.com</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            ¿Puedo obtener descuentos por compras al por mayor?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>Por supuesto! Podes ponerte en contacto con nosotros y te haremos llegar la lista de precios por mayor</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            ¿Si no veo un producto en la página web, ¿puedo realizar un pedido especial o consultar sobre la disponibilidad?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>Claro que si! Ponete en contacto con nosotros y decinos que es lo que estás buscando</p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default CenteredAccordion;
