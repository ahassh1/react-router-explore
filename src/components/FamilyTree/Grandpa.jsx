import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Grandpa = ({asset}) => {
    return (
        <div>
            <h2>Grandpa</h2>
            <section>
                <Dad asset={asset}></Dad>
                <Uncle></Uncle>
                <Aunt asset={asset}></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;