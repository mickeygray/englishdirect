import React, { Fragment } from "react";
import Image from "next/image"
import SmallForm from "./SmallForm";

const Hero = () => {
  return (
    <Fragment>
      <div className='grid-hero'>
        <div className='overlay'>
          <Image src="/hero.png" height="100%" width="100%" alt="English Direct Rebecca Warner" />
        </div>
        <div className='homecopy'>
          <div className='container py-3 mx-3'>
            <br />
            <br />
            <h2 className='text-primary'>English Direct with Rebecca</h2>
            <h3 className='text-danger'>PERSONALIZED. CHALLENGING. FUN.'</h3>
            <p >
            Vous recherchez une Professeure Native d'Anglais des États-Unis qui vous accorde <br/>
            l'attention personnalisée que vous méritez ? Vous êtes au bon endroit ! <br/>
            Je suis diplômée en Littérature Anglais (Nomenclature Bac+3 en France) <br/>
            avec sept ans d'expérience dans l'enseignement de ma langue maternelle. <br/>
            Ma connaissance de la culture française et mon expérience en langue française <br/>
            faciliteront nos échanges. Je peux vous aider à vous sentir à l'aise afin d'exprimer pleinement votre potentiel.

            </p>
            <br />
            <a
              href='tel:+13106665997'
              className='btn btn-primary all-center'
              style={{ borderRadius: "5px", width: "200px" }}>
              Call Rebecca Now!
            </a>
          </div>
        </div>
      </div>
      <div>
        <SmallForm />
      </div>
      <br />
      <br />
      <br />
    </Fragment>
  );
};

export default Hero;
