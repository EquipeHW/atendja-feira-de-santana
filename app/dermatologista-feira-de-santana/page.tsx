import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Phone, Star, CheckCircle, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DermatologistaPage() {
  const services = [
    "Consultas dermatológicas completas",
    "Eletrocauterização de verrugas e lesões benignas",
    "Tratamento de acne e rosácea",
    "Remoção de cistos e lipomas",
    "Tratamento de manchas e melasma",
    "Biópsia de pele",
    "Orientação para cuidados com a pele",
  ]

  const benefits = [
    {
      title: "Diagnóstico Preciso",
      description: "Avaliação completa com dermatologistas especialistas",
    },
    {
      title: "Procedimentos no Local",
      description: "Pequenas cirurgias e tratamentos realizados na clínica",
    },
    {
      title: "Profissionais Experientes",
      description: "Dermatologistas com ampla experiência clínica",
    },
    {
      title: "Preço Acessível",
      description: "Consultas a partir de R$ 150 e procedimentos desde R$ 80",
    },
  ]

  const testimonials = [
    {
      text: "Fiz tratamento para acne e os resultados foram surpreendentes. Equipe muito atenciosa e profissional!",
      rating: 5,
      name: "Juliana Pereira",
    },
    {
      text: "Realizei a remoção de algumas verrugas e foi tudo muito rápido e indolor. Recomendo!",
      rating: 5,
      name: "Roberto Almeida",
    },
  ]

  const commonProblems = [
    {
      title: "Acne",
      description:
        "Inflamação das glândulas sebáceas que causa espinhas, cravos e cistos. Afeta principalmente adolescentes, mas pode ocorrer em qualquer idade.",
    },
    {
      title: "Melasma",
      description:
        "Manchas escuras na pele, principalmente no rosto, causadas por exposição solar, alterações hormonais e predisposição genética.",
    },
    {
      title: "Verrugas",
      description:
        "Lesões causadas pelo HPV (papilomavírus humano) que podem aparecer em qualquer parte do corpo, principalmente mãos e pés.",
    },
    {
      title: "Dermatite",
      description:
        "Inflamação da pele que causa vermelhidão, coceira e descamação. Pode ser atópica, de contato ou seborreica.",
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
              <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
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
            src="/8.png?height=200&width=200"
            alt="Dermatologista examinando paciente"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dermatologista
              <br />
              <span className="text-[#8dbf44]">em Feira de Santana</span>
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              Cuidados especializados para a saúde da sua pele com atendimento humanizado, procedimentos modernos e
              preço justo.
            </p>
            <Button size="lg" className="bg-[#8dbf44] hover:bg-[#2ea55c] text-white font-medium px-8 py-3">
              <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Serviços Dermatológicos</h2>
              <p className="text-gray-600 mb-6">
                Na Atend Já Feira de Santana, oferecemos atendimento dermatológico completo com profissionais
                qualificados para diagnóstico e tratamento de problemas de pele, cabelo e unhas.
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
                Nossos dermatologistas são especializados no diagnóstico e tratamento de diversas condições, desde
                problemas simples até casos mais complexos.
              </p>
              <Button size="lg" className="bg-[#008b47] hover:bg-[#2ea55c] text-white font-medium px-8 py-3">
                <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                  📱 Agende sua consulta dermatológica
                </a>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-[#008b47] text-white p-8 rounded-lg">
                <div className="flex justify-center mb-6">
                  <Shield className="h-16 w-16" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Por que consultar um dermatologista?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#8dbf44] mt-1 flex-shrink-0" />
                    <span>Diagnóstico e tratamento de doenças de pele</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#8dbf44] mt-1 flex-shrink-0" />
                    <span>Prevenção e detecção precoce de câncer de pele</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#8dbf44] mt-1 flex-shrink-0" />
                    <span>Tratamento de acne, manchas e cicatrizes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#8dbf44] mt-1 flex-shrink-0" />
                    <span>Orientação para cuidados adequados com a pele</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefícios do Nosso Atendimento Dermatológico</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conheça as vantagens de realizar sua consulta dermatológica na Atend Já Feira de Santana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-[#008b47] text-white p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problemas Comuns Section */}
      <section className="bg-[#008b47] text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Problemas Dermatológicos Comuns</h2>
            <p className="text-lg max-w-4xl mx-auto mb-8">
              Conheça os problemas de pele mais frequentes que tratamos em nossa clínica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {commonProblems.map((problem, index) => (
              <Card key={index} className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#008b47] text-lg mb-2">{problem.title}</h3>
                  <p className="text-gray-600 mb-4">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-[#8dbf44] hover:bg-[#2ea55c] text-white font-medium px-8 py-3">
              <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                📱 Agende sua consulta dermatológica
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Procedimentos Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Procedimentos Dermatológicos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Realizamos diversos procedimentos dermatológicos em nossa clínica com preços acessíveis.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <h3 className="font-bold text-[#008b47] text-xl mb-4">Eletrocauterização</h3>
              <p className="text-gray-600 mb-4">
                Procedimento que utiliza corrente elétrica para remover verrugas, pintas e outras lesões benignas da
                pele. É rápido, seguro e minimamente invasivo.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47]" />
                  <span className="text-gray-600">Procedimento rápido</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47]" />
                  <span className="text-gray-600">Recuperação imediata</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47]" />
                  <span className="text-gray-600">Anestesia local</span>
                </div>
              </div>
              <p className="font-semibold text-[#008b47] mt-4">A partir de R$ 80 por lesão</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <h3 className="font-bold text-[#008b47] text-xl mb-4">Remoção de Cistos e Lipomas</h3>
              <p className="text-gray-600 mb-4">
                Procedimento cirúrgico para remoção de cistos sebáceos e lipomas (tumores benignos de gordura).
                Realizado com anestesia local e técnicas minimamente invasivas.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47]" />
                  <span className="text-gray-600">Procedimento seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47]" />
                  <span className="text-gray-600">Recuperação rápida</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47]" />
                  <span className="text-gray-600">Resultado estético</span>
                </div>
              </div>
              <p className="font-semibold text-[#008b47] mt-4">A partir de R$ 150 por lesão</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-[#008b47] text-xl mb-4">Biópsia de Pele</h3>
              <p className="text-gray-600 mb-4">
                Procedimento para retirada de pequena amostra de pele para análise laboratorial. Fundamental para
                diagnóstico preciso de diversas condições dermatológicas.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47]" />
                  <span className="text-gray-600">Diagnóstico preciso</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47]" />
                  <span className="text-gray-600">Procedimento rápido</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47]" />
                  <span className="text-gray-600">Mínima cicatriz</span>
                </div>
              </div>
              <p className="font-semibold text-[#008b47] mt-4">A partir de R$ 200 (não inclui análise laboratorial)</p>
            </div>
          </div>
        </div>
      </section>

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

      {/* Cuidados com a Pele Section */}
      <section className="bg-[#008b47] text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Dicas para Cuidados com a Pele</h2>
            <div className="bg-white text-gray-900 p-6 rounded-lg">
              <p className="text-gray-600 mb-6">
                Nossos dermatologistas recomendam alguns cuidados básicos para manter a saúde da sua pele:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Use protetor solar diariamente</h4>
                    <p className="text-gray-600 text-sm">Mesmo em dias nublados ou dentro de casa</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Hidrate a pele regularmente</h4>
                    <p className="text-gray-600 text-sm">Use hidratantes adequados para seu tipo de pele</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Limpe o rosto corretamente</h4>
                    <p className="text-gray-600 text-sm">Duas vezes ao dia, com produtos adequados</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Faça check-up dermatológico anual</h4>
                    <p className="text-gray-600 text-sm">Para prevenção e diagnóstico precoce</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Lembre-se: cada pele é única e requer cuidados específicos. Consulte um dermatologista para receber
                orientações personalizadas para o seu tipo de pele.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cuide da saúde da sua pele</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Não deixe para cuidar da sua pele apenas quando surgirem problemas. Faça check-ups regulares e previna
            doenças dermatológicas.
          </p>
          <Button size="lg" className="bg-[#008b47] hover:bg-[#2ea55c] text-white font-medium px-8 py-3">
            <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
              📱 Agende sua consulta pelo WhatsApp
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
