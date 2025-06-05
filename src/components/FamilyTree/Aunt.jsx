import React from 'react';
import Cousin from './Cousin';

const Aunt = ({asset}) => {
    return (
        <div>
            <section className='flex'>
                <Cousin asset={asset} name='Tom tom'></Cousin>
                <Cousin name='jo joo'></Cousin>
                <Cousin name='jarek tia'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;