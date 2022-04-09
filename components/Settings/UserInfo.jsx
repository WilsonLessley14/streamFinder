import React, { useState, useEffect } from 'react';

const UserInfo = (props) => {
  return (
    <div className='userInfo'>
      <table>
        <tr>
          <td className='tableField'>Email:</td>
          <td className='tableInput'>john@gmail.com</td>
        </tr>
        <tr>
          <td className='tableField'>Password:</td>
          <td className='tableInput'>*******</td>
        </tr>
      </table>
    </div>
  );
};

export default UserInfo;
