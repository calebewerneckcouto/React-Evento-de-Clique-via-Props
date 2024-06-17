
type Props ={
    label:string;
    onClick:() =>void;
}

export const CustonButton =({label,onClick}:Props)=>{
    return (
        <button
             
        onClick={onClick}
           
        style={{
          padding: '12px',
          color: 'white',
          backgroundColor: '#1D4ED8', // Azul similar ao bg-blue-700
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {label}
      </button>
      
    );
}