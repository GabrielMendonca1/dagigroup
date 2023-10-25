import Image from 'next/image';


export default function Footer() {
      return (
            <footer className="bg-black text-white p-10">
            <div className="container mx-auto flex justify-between mt-16 mb-24">
              <div className="w-1/4">
                <h3 className=" pb-2 mb-4">Product</h3>
                <ul className="list-none p-0">
                  <li className="mb-2">Diam orci</li>
                  <li className="mb-2">Mi feugiat</li>
                  <li className="mb-2">Netus fermentum</li>
                </ul>
              </div>
      
              <div className="w-1/4">
                <h3 className=" pb-2 mb-4">Information</h3>
                <ul className="list-none p-0">
                  <li className="mb-2">Nibh</li>
                  <li className="mb-2">Egestas</li>
                  <li className="mb-2">Dictum</li>
                </ul>
              </div>
      
              <div className="w-1/4">
                <h3 className="pb-2 mb-4">Company</h3>
                <ul className="list-none p-0">
                  <li className="mb-2">Id maecenas</li>
                  <li className="mb-2">Id orci</li>
                  <li className="mb-2">Magna ultricies</li>
                </ul>
              </div>
      
              <div className="w-1/4">
                <h3 className=" pb-2 mb-4">Subscribe</h3>
                <div className="flex mb-2">
                  <input type="email" placeholder="Email address" className="flex-1 mr-2 p-2"/>
                  <button className="bg-white text-black p-2"></button>
                </div>
                <p>Some subscription info here...</p>
              </div>
            </div>
            <hr className='h-[1px] opacity-50 px-24'></hr>
            <div className="container mx-auto flex justify-between m-24">
              <Image
               src="/footer.png" 
               alt="footer"
               width={100}
               height={100}
               priority={true}
              />
              <ul className="space-x-4">
                <li>GGG</li>
                <li>GGG</li>
                <li>GGG</li>
              </ul>

             <div>
                  <p>© 2021 - Company</p>
             </div>

            </div>
          </footer>
     );
}

