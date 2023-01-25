import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import NewsFeed from './components/News';
import ShoppingList from './components/ShoppingList';

function App() {

  const contacts = [
    { fullname:"chourabi taher1" , email:"tchourabi@gmail.com1" },
    { fullname:"chourabi taher2" , email:"tchourabi@gmail.com1" },
    { fullname:"chourabi taher3" , email:"tchourabi@gmail.com1" },
    { fullname:"chourabi taher4" , email:"tchourabi@gmail.com1" },
    { fullname:"chourabi taher5" , email:"tchourabi@gmail.com1" },
    { fullname:"chourabi taher6" , email:"tchourabi@gmail.com1" },
    
  ];




  const news = [
    { content:"hello world", likes:12 },
    { content:"React js is esay to learn", likes:8 },
    
  ]



  return (
    <div className="App">
      {
        /**
         * 
        <Contact  fullname="chourabi taher" email="demo@gmail.com"   />
        <Contact  fullname="demo user" email="demo_test@gmail.com"   />
        

        <div className="row">
          {
            contacts.map( (c)=>{
              return( 
                <div className="col-sm-3 mb-3">
                    <Contact fullname={ c.fullname }   email={ c.email }  />
                </div>
               );
            } )
          }
        </div>
         */
      }




      {
        /**
         * <div className="container">
        <div className="row">
        {
          news.map((n)=>{
            return(
              <div className="col-12 mb-3">
                  <NewsFeed content={ n.content }    likes={ n.likes } />
              </div>
            );
          })
        }
        </div>
      </div>
         */
      }




      <ShoppingList />






    </div>
  );
}

export default App;
