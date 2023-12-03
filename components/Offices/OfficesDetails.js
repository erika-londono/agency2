import React from "react";
import Link from "next/link";
import Office from "../Office/Office";

const OfficesDetails = () => {
  return (
    <div className="blog-section ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>Nuestras oficinas</h2>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-lg-8 col-md-12 pb-100"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            <p>
              Ceter se especializa en brindar soluciones logísticas integrales
              para satisfacer las necesidades de nuestros clientes, asegurando
              la entrega oportuna y confiable de sus mercancías.
            </p>

            <p>
              Nos complace ofrecer una amplia gama de servicios de transporte de
              carga líquida y seca para satisfacer las necesidades logísticas de
              nuestros clientes. Con un enfoque en la eficiencia y la seguridad,
              garantizamos la entrega oportuna y confiable de mercancías en
              cualquier destino. Nuestro compromiso con la excelencia en el
              servicio nos ha permitido establecer diversas sucursales
              estratégicas para atender de manera efectiva a nuestros clientes
              en todo el país:
            </p>
          </div>
        </div>
        <div className="row">
          {/* <Office
            link={'tel:3124496173'}
            title={'Oficina Yumbo'}
            address={'Cencar Bloque A3 Oficina 113'}
            cel={'3124496173'}
            city='Yumbo - Valle del Cauca'
            callToAction={'📲 Clic para llamar'}
          /> */}
          <Office
            link={'tel:3125217493'}
            title={'Oficina Aguazul'}
            address={'Calle 12 # 25-20 Barrio los Angeles'}
            cel={'3125217493'}
            city={'Aguazul - Casanare'}
            callToAction={'📲 Clic para llamar'}
          />
          <Office
            link={'tel:3102539734'}
            title={'Oficina Bogotá'}
            address={'Avenida Ciudad de Cali # 13A – 33 PISO 3'}
            cel={'3102539734'}
            cel2={'3203940796'}
            city={'Aguazul - Casanare'}
            callToAction={'📲 Clic para llamar'}
          />
          <Office
            title={'Oficina Barranquilla'}
            address={'Cra 8B # 5-325 Local 7F Barrio Pasadena'}
            link={'tel:3132612174'}
            cel={'3132612174'}
            city={'Barranquilla - Atlántico'}
            callToAction={'📲 Clic para llamar'}
          />
          <Office
            title={'Oficina Lizama'}
            address={'Km 70 Via Bucaramanga – Barrancabermeja Corregimiento La Fortuna'}
            link={'tel:3174418276'}
            cel={'3174418276'}
            city={'Barrancabermeja - Santander'}
            callToAction={'📲 Clic para llamar'}
          />
        </div>
      </div>
    </div>
  );
};

export default OfficesDetails;
