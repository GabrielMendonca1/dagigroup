export default function Footer() {
      return (
        <footer className="bg-black dark:bg-white py-5">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <h1 className="text-xl font-semibold text-white dark:text-black">DAGI GROUP</h1>
                <p className="mt-2 text-sm text-white dark:text-black">Descricao</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Direct</h3>
                <ul className="mt-2">
                  <li><a href="#" className="text-white dark:text-black">Home</a></li>
                  <li><a href="#" className="text-white dark:text-black">Sobre Nos</a></li>
                  <li><a href="#" className="text-white dark:text-black">Nossos servicos</a></li>
                  <li><a href="#" className="text-white dark:text-black">Contate-nos</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Suporte</h3>
                <ul className="mt-2">
                  <li><a href="#" className="text-white dark:text-black">Ajuda</a></li>
                  <li><a href="#" className="text-white dark:text-black">FAQ</a></li>
                  <li><a href="#" className="text-white dark:text-black">Contratos</a></li>
                  <li><a href="#" className="text-white dark:text-black">Politica de privacidade</a></li>
                  <li><a href="#" className="text-white dark:text-black">Termos & Condicoess</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Visit Office</h3>
                <iframe
                  src="https://www.google.com/maps/place/Pizza+da+Chapada/@-12.9980374,-38.4651212,17z/data=!3m1!4b1!4m6!3m5!1s0x7161b6916e98c09:0x244d23b63217b24f!8m2!3d-12.9980427!4d-38.4602503!16s%2Fg%2F1pp2x9l0y?hl=pt-BR&entry=ttu"
                  width="100%" height="150px" style={{ border: 0 }} allowFullScreen
                ></iframe>
                <p className="mt-2">
                  <i className="fa fa-map-pin" aria-hidden="true"></i>Endereco, rua monsenhor apio silva
                </p>
                <p>
                  <a href="#" className="btn"><i className="fa fa-whatsapp fa-lg" aria-hidden="true"></i></a>
                  <a href="#" className="btn"><i className="fa fa-phone fa-lg" aria-hidden="true"></i></a>
                  <a href="#" className="btn"><i className="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
                  <a href="#" className="btn"><i className="fa fa-instagram fa-lg" aria-hidden="true"></i></a>
                  <a href="#" className="btn"><i className="fa fa-envelope fa-lg" aria-hidden="true"></i></a>
                </p>
              </div>
            </div>
          </div>
      
  <div className="copyright mb-5 text-white items-center">
          <p><i className="fa fa-copyright" aria-hidden="true"> 2023. All Rights Reserved | Dagi Group</i></p>
        </div>
      
  </footer>
     );
}

