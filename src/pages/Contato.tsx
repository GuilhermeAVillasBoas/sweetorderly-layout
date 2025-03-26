
import { Navigation } from "../components/Navigation";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Contato = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">Contato</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Seção "Sobre" */}
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-xl font-playfair font-bold mb-4">Nossa História</h2>
                <p className="text-foreground/80 mb-4">
                  Desde 2020, trazemos doçura e alegria para momentos especiais. 
                  Cada criação é feita com amor, dedicação e ingredientes selecionados.
                </p>
                <p className="text-foreground/80 mb-4">
                  Nossa confeitaria nasceu do sonho de transformar receitas de família em 
                  experiências memoráveis. Hoje, somos referência em doces artesanais e bolos decorados.
                </p>
                <p className="text-lg font-medium text-foreground/90 italic">
                  "Transformando momentos em doces memórias"
                </p>
              </div>
              
              {/* Seção Missão e Valores */}
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-xl font-playfair font-bold mb-4">Missão e Valores</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-medium text-accent">Missão</h3>
                    <p className="text-foreground/80">Adoçar a vida das pessoas através de produtos artesanais de alta qualidade.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-accent">Visão</h3>
                    <p className="text-foreground/80">Ser referência em confeitaria artesanal, levando nossos doces para todos os cantos do país.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-accent">Valores</h3>
                    <ul className="list-disc list-inside text-foreground/80">
                      <li>Qualidade em cada detalhe</li>
                      <li>Atendimento personalizado</li>
                      <li>Compromisso com a satisfação</li>
                      <li>Inovação constante</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h2 className="text-xl font-playfair font-bold mb-4">Informações de Contato</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">Telefone</p>
                        <a href="tel:+551199999999" className="text-foreground/80 hover:text-primary-foreground transition-colors">
                          (11) 9999-9999
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">E-mail</p>
                        <a href="mailto:contato@confeitaria.com" className="text-foreground/80 hover:text-primary-foreground transition-colors">
                          contato@confeitaria.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">Endereço</p>
                        <address className="text-foreground/80 not-italic">
                          Rua das Flores, 123<br />
                          Jardim Primavera<br />
                          São Paulo - SP<br />
                          CEP: 01234-567
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      </svg>
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <a href="https://wa.me/551199999999" className="text-foreground/80 hover:text-primary-foreground transition-colors">
                          (11) 9999-9999
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Instagram className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">Instagram</p>
                        <a href="https://instagram.com/confeitaria" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary-foreground transition-colors">
                          @confeitaria
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-playfair font-bold mb-4">Horário de Funcionamento</h2>
                  <div className="space-y-2 mb-6">
                    <p><span className="font-medium">Segunda a Sexta:</span> 08:00 - 20:00</p>
                    <p><span className="font-medium">Sábados:</span> 08:00 - 18:00</p>
                    <p><span className="font-medium">Domingos e Feriados:</span> 09:00 - 15:00</p>
                  </div>
                  
                  <div className="mt-6">
                    <div className="rounded-lg overflow-hidden border">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0973957984295!2d-46.6590!3d-23.5638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQ5LjciUyA0NsKwMzknMzIuNCJX!5e0!3m2!1spt-BR!2sbr!4v1646848725897!5m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="250" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy"
                        title="Localização da Confeitaria"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contato;
