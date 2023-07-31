import Sidebar from '../../components/Sidebar';

function HeaderOnly({ children }) {
   return (
      <div className="container">
         <Sidebar />
         <div>{children}</div>
      </div>
   );
}

export default HeaderOnly;
