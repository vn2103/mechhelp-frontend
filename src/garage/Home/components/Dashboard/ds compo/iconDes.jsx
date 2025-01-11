import React from 'react';
import { Icon } from '@iconify/react';

const CircleWithIcon = ({ iconName }) => {
  const styles = {
    container: {
      position: 'relative',
      width: '40px',
      height: '40px',
    },
    largeCircle: {
      backgroundColor: '#FFEBCC',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      position: 'absolute',
      top: '2px',
      left: '2px',
    },
    smallCircle: {
        backgroundColor: '#FFE4B3',
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        position: 'absolute',
        top: 0,
        left: 0,
      },
  
    iconContainer: {
      position: 'absolute',
      top: '6px',
      left: '17px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.smallCircle}></div>
      <div style={styles.largeCircle}></div>
      <div style={styles.iconContainer}>
        <Icon icon={iconName} color="#FF820E" width="25" height="25" />
      </div>
    </div>
  );
};

export default CircleWithIcon;
