import React from 'react'
import Table from './Table';
import Note from './Note';

const Home = ({ tableitems, newchanges, budlist, appendexpense }) => {
  return (
    <div className=" flex border-2 border-black flex-col-reverse lg:flex-row">
      <Table
        plottable={tableitems}
        newchng={newchanges}
        budList={budlist}
      />
      <Note
        fun={appendexpense}
        explist={tableitems}
        budList={budlist}
      />
    </div>
  );
}

export default Home
