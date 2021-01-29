import React, { Fragment } from "react";
import Image from "next/image"
import SmallForm from "./SmallForm";

const Hero = () => {
  return (
    <Fragment>
      <div className='grid-hero'>

        <div className='overlay' style={{backgroundColor:'black',opacity:'50%'}} >
         
          <Image src="/hero.png" style={{opacity:'50%'}}height="100vh" width="100vw" alt="English Direct Rebecca Warner" />
           
        </div>
        <div className='homecopy'>
          <div className='container mx-3'>
      
            <h2 className='text-primary'>English Direct with Rebecca</h2>
            <h3 className='text-danger'>PERSONALIZED. CHALLENGING. FUN.'</h3>
            <p><b>
            Vous recherchez une Professeure Native d'Anglais des États-Unis qui vous accorde <br/>
            l'attention personnalisée que vous méritez ? Vous êtes au bon endroit ! <br/>
            Je suis diplômée en Littérature Anglais (Nomenclature Bac+3 en France) <br/>
            avec sept ans d'expérience dans l'enseignement de ma langue maternelle. <br/>
            Ma connaissance de la culture française et mon expérience en langue française <br/>
            faciliteront nos échanges. Je peux vous aider à vous sentir à l'aise afin d'exprimer pleinement votre potentiel.
</b>
            </p>
            <br />

            <a
              href='tel:+330604506963'
              className='btn btn-primary all-center'
              style={{ borderRadius: "5px", width: "200px" }}>
              Call Rebecca Now!
            </a>
          </div>
        <div>
       
      </div>
       <div className ='all-center' >
          <SmallForm />
          </div>
        </div>
     
      </div>
      
    </Fragment>
  );
};

export default Hero;
