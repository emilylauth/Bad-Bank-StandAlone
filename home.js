function Home(){
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
   </div>    
  );  
}
