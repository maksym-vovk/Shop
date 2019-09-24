<<<<<<< HEAD
import React, { useEffect } from 'react';
import { Filter } from '../';
=======
import React, {useEffect} from 'react';
import { ProductsList } from '../ProductsList';
>>>>>>> development

export const All = () => {
  useEffect(() => {
    document.title = 'Apple Watch Series 5';
<<<<<<< HEAD
  }, []);
=======
  }, [])
>>>>>>> development
  return (
    <section className="container">
      <h2 className="page-title">Apple Watch Series 5</h2>
      <Filter />
    </section>
  );
};
