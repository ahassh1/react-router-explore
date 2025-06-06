import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {

    const[money,setMoney] = use(MoneyContext);

    const handleAddMoney = () =>{
        setMoney(money +5000);
    }
    
    return (
        <div>
            <section className='flex'>
                <Cousin asset={asset} name='Tom tom'></Cousin>
                <Cousin name='jo joo'></Cousin>
                <Cousin name='jarek tia'></Cousin>
                <button onClick={handleAddMoney}>Add 5000 taka only</button>
            </section>
        </div>
    );
};

export default Aunt;