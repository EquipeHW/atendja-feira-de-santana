import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { UserCheck, Phone, Star, CheckCircle, MapPin, Clock, Stethoscope, Calendar, DollarSign } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GinecologistaPage() {
  const services = [
    "Consultas ginecológicas completas",
    "Papanicolau (preventivo)",
    "Inserção de DIU",
    "Colocação de Implanon (implante contraceptivo)",
    "Ultrassonografia transvaginal",
    "Planejamento familiar",
  ]

  const benefits = [
    {
      title: "Profissionais Especializados",
      description: "Equipe médica altamente qualificada e experiente em ginecologia",
      icon: Stethoscope,
    },
    {
      title: "Agendamento Rápido",
      description: "Marque sua consulta em até 24 horas, sem longas esperas",
      icon: Calendar,
    },
    {
      title: "Atendimento Ágil",
      description: "Consultas com duração adequada e sem pressa",
      icon: Clock,
    },
    {
      title: "Preço Justo",
      description: "Valores acessíveis para consultas e procedimentos",
      icon: DollarSign,
    },
  ]

  const testimonials = [
    {
      text: "Atendimento excelente! A médica foi muito atenciosa e me deixou super à vontade durante a consulta.",
      rating: 5,
      name: "Mariana Costa",
    },
    {
      text: "Fiz meu preventivo e a inserção do DIU no mesmo dia. Equipe muito profissional e cuidadosa.",
      rating: 5,
      name: "Juliana Ferreira",
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
              <a href="https://api.whatsapp.com/send?phone=557530268494&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20uma%20ginecologista." target="_blank" rel="noopener noreferrer">
                AGENDAR CONSULTA
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#008b47] to-[#2ea55c] text-white py-20 px-4 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
          <Image
            src="/3.png?height=600&width=800"
            alt="Ginecologista atendendo paciente"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ginecologista
              <br />
              <span className="text-[#8dbf44]">em Feira de Santana</span>
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              Cuidado especializado para a saúde da mulher com atendimento humanizado, privacidade e preço justo.
              Consultas e procedimentos em um só lugar.
            </p>
            <Button size="lg" className="bg-[#8dbf44] hover:bg-[#2ea55c] text-white font-medium px-8 py-3">
              <a href="https://api.whatsapp.com/send?phone=557530268494&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20uma%20ginecologista." target="_blank" rel="noopener noreferrer">
                📱 Agende sua consulta pelo WhatsApp
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Serviços Ginecológicos</h2>
              <p className="text-gray-600 mb-6">
                Na Atend Já Feira de Santana, oferecemos atendimento ginecológico completo com profissionais
                qualificados e ambiente acolhedor para cuidar da saúde da mulher em todas as fases da vida.
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
                Todos os procedimentos são realizados no mesmo local, com equipamentos modernos e equipe especializada.
              </p>
              <Button size="lg" className="bg-[#008b47] hover:bg-[#2ea55c] text-white font-medium px-8 py-3">
                <a href="https://api.whatsapp.com/send?phone=557530268494&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20uma%20ginecologista." target="_blank" rel="noopener noreferrer">
                  Agende sua consulta ginecológica
                </a>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-[#008b47] text-white p-8 rounded-lg">
                <div className="flex justify-center mb-6">
                <Image
                    src="/ginecologista.png"
                    alt="Ortopedia"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Por que fazer acompanhamento ginecológico?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#8dbf44] mt-1 flex-shrink-0" />
                    <span>Prevenção do câncer de colo do útero e de mama</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#8dbf44] mt-1 flex-shrink-0" />
                    <span>Diagnóstico precoce de infecções e doenças ginecológicas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#8dbf44] mt-1 flex-shrink-0" />
                    <span>Orientação sobre métodos contraceptivos adequados</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#8dbf44] mt-1 flex-shrink-0" />
                    <span>Acompanhamento da saúde feminina em todas as fases da vida</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefícios do Nosso Atendimento Ginecológico</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conheça as vantagens de realizar sua consulta ginecológica na Atend Já Feira de Santana.
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

      {/* Procedimentos Section */}
      <section className="bg-[#008b47] text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Procedimentos Ginecológicos</h2>
            <p className="text-lg max-w-4xl mx-auto mb-8">
              Conheça os principais procedimentos realizados em nossa clínica com preços acessíveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#008b47] text-lg mb-2">Papanicolau (Preventivo)</h3>
                <p className="text-gray-600 mb-4">
                  Exame fundamental para detecção precoce do câncer de colo do útero e outras alterações. Recomendado
                  anualmente para mulheres sexualmente ativas.
                </p>
                
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#008b47] text-lg mb-2">Inserção de DIU</h3>
                <p className="text-gray-600 mb-4">
                  Método contraceptivo de longa duração, seguro e eficaz. Procedimento realizado em consultório com
                  profissionais experientes.
                </p>
               
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#008b47] text-lg mb-2">Colocação de Implanon</h3>
                <p className="text-gray-600 mb-4">
                  Implante contraceptivo subdérmico com duração de até 3 anos. Procedimento rápido e minimamente
                  invasivo.
                </p>
             
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#008b47] text-lg mb-2">Ultrassonografia Transvaginal</h3>
                <p className="text-gray-600 mb-4">
                  Exame de imagem que avalia útero, ovários e outras estruturas pélvicas. Fundamental para diagnóstico
                  de diversas condições ginecológicas.
                </p>
               
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-[#8dbf44] hover:bg-[#2ea55c] text-white font-medium px-8 py-3">
              <a href="https://api.whatsapp.com/send?phone=557530268494&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20uma%20ginecologista." target="_blank" rel="noopener noreferrer">
                Agende seu procedimento ginecológico
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que nossas <span className="text-[#008b47]">pacientes dizem?</span>
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

      {/* Saúde da Mulher Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Cuidando da Saúde da Mulher</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                A saúde da mulher envolve cuidados específicos em todas as fases da vida. Na Atend Já, oferecemos
                atendimento especializado para:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47] mt-1" />
                  <span className="text-gray-600">Adolescentes iniciando vida sexual</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47] mt-1" />
                  <span className="text-gray-600">Mulheres em idade reprodutiva</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47] mt-1" />
                  <span className="text-gray-600">Gestantes em acompanhamento pré-natal</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47] mt-1" />
                  <span className="text-gray-600">Mulheres na menopausa e pós-menopausa</span>
                </div>
              </div>
              <p className="text-gray-600">
                Nosso objetivo é proporcionar um atendimento integral, respeitoso e de qualidade, com foco na prevenção
                e no bem-estar feminino.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#008b47] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Cuide da sua saúde ginecológica</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Não deixe para cuidar da sua saúde apenas quando surgirem problemas. Faça check-ups regulares e previna
            doenças ginecológicas.
          </p>
          <Button size="lg" className="bg-[#8dbf44] hover:bg-[#2ea55c] text-white font-medium px-8 py-3">
            <a href="https://api.whatsapp.com/send?phone=557530268494&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20uma%20ginecologista." target="_blank" rel="noopener noreferrer">
              Agende sua consulta pelo WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      
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
