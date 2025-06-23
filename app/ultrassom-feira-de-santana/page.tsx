import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, Phone, Star, CheckCircle, ImageIcon, MapPin, Clock, Stethoscope, Calendar, DollarSign } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function UltrassomPage() {
  const services = [
    "Ultrassom abdominal total",
    "Ultrassom pélvico",
    "Ultrassom transvaginal",
    "Ultrassom de mama",
    "Ultrassom de tireoide",
    "Ultrassom obstétrico",
  ]

  const benefits = [
    {
      title: "Profissionais Especializados",
      description: "Equipe médica altamente qualificada e experiente em ultrassonografia",
      icon: Stethoscope,
    },
    {
      title: "Agendamento Rápido",
      description: "Marque seu exame em até 24 horas, sem longas esperas",
      icon: Calendar,
    },
    {
      title: "Atendimento Ágil",
      description: "Exames com duração adequada e sem pressa",
      icon: Clock,
    },
    {
      title: "Preço Justo",
      description: "Valores acessíveis para exames e procedimentos",
      icon: DollarSign,
    },
  ]

  const testimonials = [
    {
      text: "Fiz meu ultrassom transvaginal e fiquei muito satisfeita com o atendimento. A médica foi super atenciosa e explicou tudo detalhadamente.",
      rating: 5,
      name: "Fernanda Oliveira",
    },
    {
      text: "Consegui marcar meu ultrassom para o mesmo dia. Ambiente confortável e equipe muito profissional.",
      rating: 5,
      name: "Patrícia Mendes",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#8dbf44] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <span>(75) 3026‑8494</span>
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>@atendjafeiradesantana</span>
            <span>Atend Já Feira de Santana</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/">
              <img src="/atendja.png?height=60&width=200" alt="Atend Já Logo" className="h-14" />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#008b47] font-medium transition-colors">
                HOME
              </Link>
              <Link
                href="/#especialidades"
                className="text-gray-700 hover:text-[#008b47] font-medium transition-colors"
              >
                ESPECIALIDADES
              </Link>
              <Link href="/#diferenciais" className="text-gray-700 hover:text-[#008b47] font-medium transition-colors">
                DIFERENCIAIS
              </Link>
              <Link href="/#sobre" className="text-gray-700 hover:text-[#008b47] font-medium transition-colors">
                SOBRE
              </Link>
              <Link href="/#contato" className="text-gray-700 hover:text-[#008b47] font-medium transition-colors">
                CONTATO
              </Link>
            </nav>
            <Button className="bg-[#008b47] hover:bg-[#2ea55c] text-white font-medium px-6">
              <a href="https://api.whatsapp.com/send?phone=557530268494&text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20o%20ultrassom" target="_blank" rel="noopener noreferrer">
                AGENDAR EXAME
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#008b47] to-[#2ea55c] text-white py-20 px-4 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
          <Image
            src="/6.png?height=600&width=800"
            alt="Equipamento de ultrassom moderno"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ultrassom
              <br />
              <span className="text-[#8dbf44]">em Feira de Santana</span>
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              Exames de ultrassonografia com equipamentos de última geração, médicos especialistas e preços acessíveis.
              Resultados rápidos e precisos.
            </p>
            <Button size="lg" className="bg-[#8dbf44] hover:bg-[#2ea55c] text-white font-medium px-8 py-3">
              <a href="https://api.whatsapp.com/send?phone=557530268494&text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20o%20ultrassom" target="_blank" rel="noopener noreferrer">
                📱 Agende seu exame pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Exames de Ultrassom</h2>
              <p className="text-gray-600 mb-6">
                Na Atend Já Feira de Santana, oferecemos diversos tipos de exames de ultrassonografia com equipamentos
                modernos e médicos especialistas para diagnósticos precisos.
              </p>
              <div className="space-y-3 mb-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#008b47] mt-1" />
                    <span className="text-gray-600">{service}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                Todos os exames são realizados com hora marcada, em ambiente confortável e com resultados rápidos.
              </p>
              <Button size="lg" className="bg-[#008b47] hover:bg-[#2ea55c] text-white font-medium px-8 py-3">
                <a href="https://api.whatsapp.com/send?phone=557530268494&text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20o%20ultrassom" target="_blank" rel="noopener noreferrer">
                  📱 Agende seu ultrassom
                </a>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-[#008b47] text-white p-8 rounded-lg">
                <div className="flex justify-center mb-6">
                <Image
                    src="/ultrassom.png"
                    alt="Ortopedia"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Por que fazer ultrassom?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#8dbf44] mt-1 flex-shrink-0" />
                    <span>Exame não invasivo e sem radiação</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#8dbf44] mt-1 flex-shrink-0" />
                    <span>Diagnóstico rápido de diversas condições</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#8dbf44] mt-1 flex-shrink-0" />
                    <span>Visualização em tempo real de órgãos e estruturas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#8dbf44] mt-1 flex-shrink-0" />
                    <span>Acompanhamento da saúde preventiva</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefícios dos Nossos Exames de Ultrassom</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conheça as vantagens de realizar seus exames de ultrassonografia na Atend Já Feira de Santana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-[#008b47] text-white p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tipos de Ultrassom Section */}
      <section className="bg-[#008b47] text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Tipos de Ultrassom</h2>
            <p className="text-lg max-w-4xl mx-auto mb-8">
              Conheça os principais tipos de ultrassom disponíveis em nossa clínica com preços acessíveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#008b47] text-lg mb-2">Ultrassom Abdominal Total</h3>
                <p className="text-gray-600 mb-4">
                  Avalia fígado, vesícula biliar, pâncreas, rins, baço e grandes vasos abdominais. Ideal para
                  diagnóstico de cálculos, cistos e alterações nos órgãos.
                </p>
              
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#008b47] text-lg mb-2">Ultrassom Transvaginal</h3>
                <p className="text-gray-600 mb-4">
                  Avalia útero, ovários e outras estruturas pélvicas. Fundamental para diagnóstico de miomas, cistos
                  ovarianos, endometriose e outras condições ginecológicas.
                </p>
               
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#008b47] text-lg mb-2">Ultrassom Obstétrico</h3>
                <p className="text-gray-600 mb-4">
                  Acompanha o desenvolvimento do bebê durante a gestação, avaliando tamanho, posição, batimentos
                  cardíacos e outros parâmetros importantes.
                </p>
               
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#008b47] text-lg mb-2">Ultrassom de Mama</h3>
                <p className="text-gray-600 mb-4">
                  Complementa a mamografia na avaliação de nódulos e outras alterações mamárias. Especialmente útil para
                  mulheres jovens com mamas densas.
                </p>
              
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-[#008b47] hover:bg-[#2ea55c] text-white font-medium px-8 py-3">
              <a href="https://api.whatsapp.com/send?phone=557530268494&text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20o%20ultrassom" target="_blank" rel="noopener noreferrer">
                📱 Agende seu exame de ultrassom
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Tecnologia Section 
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tecnologia de Ponta</h2>
              <p className="text-gray-600 mb-6">
                Na Atend Já Feira de Santana, investimos em equipamentos de ultrassonografia de última geração para
                oferecer diagnósticos precisos e imagens de alta qualidade.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <ImageIcon className="h-5 w-5 text-[#008b47] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Imagens em Alta Definição</h4>
                    <p className="text-gray-600">Visualização detalhada de estruturas e órgãos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ImageIcon className="h-5 w-5 text-[#008b47] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Doppler Colorido</h4>
                    <p className="text-gray-600">Avaliação do fluxo sanguíneo em tempo real</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ImageIcon className="h-5 w-5 text-[#008b47] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ultrassom 4D</h4>
                    <p className="text-gray-600">Imagens tridimensionais em movimento para exames obstétricos</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Nossos equipamentos permitem diagnósticos mais precisos, contribuindo para tratamentos mais eficazes e
                melhores resultados para nossos pacientes.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Equipamento de ultrassom moderno"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>*/}

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que nossos <span className="text-[#008b47]">pacientes dizem?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-[#008b47]">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-[#008b47]">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preparação Section */}
      <section className="bg-[#008b47] text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Como se Preparar para o Ultrassom</h2>
            <div className="bg-white text-gray-900 p-6 rounded-lg">
              <h3 className="font-bold text-[#008b47] text-lg mb-4">Preparação para os principais exames:</h3>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Ultrassom Abdominal Total:</h4>
                <p className="text-gray-600">
                  Jejum de 6 horas. Beber 1 litro de água 1 hora antes do exame e não urinar.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Ultrassom Pélvico:</h4>
                <p className="text-gray-600">
                  Beber 1 litro de água 1 hora antes do exame e não urinar. Bexiga cheia é fundamental.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Ultrassom Transvaginal:</h4>
                <p className="text-gray-600">Não é necessário jejum. Bexiga vazia (deve urinar antes do exame).</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Ultrassom de Mama:</h4>
                <p className="text-gray-600">
                  Não é necessário preparo específico. Evitar o uso de cremes ou talcos na região.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Agende seu exame de ultrassom</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Não deixe sua saúde para depois. Faça seus exames preventivos regularmente e cuide do seu bem-estar.
          </p>
          <Button size="lg" className="bg-[#008b47] hover:bg-[#2ea55c] text-white font-medium px-8 py-3">
            <a href="https://api.whatsapp.com/send?phone=557530268494&text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20o%20ultrassom" target="_blank" rel="noopener noreferrer">
              📱 Agende pelo WhatsApp
            </a>
          </Button>
        </div>
      </section>

      
    {/* Footer */}
    <footer style={{ backgroundColor: "#3b3f3d" }} className="text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/atendjabranco.png"
                  alt="Atend Já Logo"
                  width={120}
                  height={60}
                  className="h-20 w-auto"
                />
              </div>
              
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" style={{ color: "#8DBF44" }} />
                  <span>(75) 3026-8494</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" style={{ color: "#8DBF44" }} />
                  <span>Rua Cícero Dantas, 221, Ponto Central</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" style={{ color: "#8DBF44" }} />
                  <span>Segunda a Sábado: 7h às 19h</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Desenvolvido por</h3>
              <div className="flex items-center">
                <Image
                  src="/logo02.png"
                  alt="HW Logo"
                  width={120}
                  height={60}
                  className="h-14 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>&copy; {new Date().getFullYear()} Atend Já Feira de Santana- Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
