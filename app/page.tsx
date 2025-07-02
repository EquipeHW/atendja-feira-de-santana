import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  Users,
  DollarSign,
  Building,
  Zap,
  Heart,
  Clock,
  Eye,
  Bone,
  Activity,
  UserCheck,
  UserRound,
  Scan,
  BoneIcon,
  CircleDot,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CarouselWithAutoplay } from "@/components/carousel-with-autoplay"

export default function HomePage() {
  const specialties = [
    {
      title: "Cardiologia",
      description: "Consultas e exames cardíacos especializados",
      icon: Heart,
      href: "/cardiologista-feira-de-santana",
      color: "text-[#008b47]",
    },
    {
      title: "Oftalmologia",
      description: "Cuidados completos para a saúde dos seus olhos",
      icon: Eye,
      href: "/oftalmologista-feira-de-santana",
      color: "text-[#2ea55c]",
    },
    {
      title: "Ginecologia",
      description: "Cuidados especializados em saúde da mulher",
      image: "/ginecologista.png",
      href: "/ginecologista-feira-de-santana",
      color: "text-[#8dbf44]",
    },
    {
      title: "Ultrassom",
      description: "Exames de imagem para diagnósticos precisos",
      image: "/ultrassom.png",
      href: "/ultrassom-feira-de-santana",
      color: "text-[#008b47]",
    },
    {
      title: "Ortopedia",
      description: "Tratamento de ossos, articulações e músculos",
      image: "/ortopedia.png",
      href: "/ortopedista-feira-de-santana",
      color: "text-[#2ea55c]",
    },
    {
      title: "Dermatologia",
      description: "Cuidados especializados para a saúde da pele",
      image: "/dermatologia.png",
      href: "/dermatologista-feira-de-santana",
      color: "text-[#8dbf44]",
    },
  ]

  const treatments = [
    {
      title: "Ultrassons (geral, exceto ósseos)",
      description: "Equipamento de última geração para diagnósticos precisos",
    },
    {
      title: "Exames Cardíacos",
      description: "Holter, MAPA, eletrocardiograma e ecocardiograma",
    },
    {
      title: "Preventivo Ginecológico",
      description: "Papanicolau, inserção de DIU e Implanon",
    },
    {
      title: "Dermatologia",
      description: "Eletrocauterização, retirada de cistos e remoção de lesões cutâneas",
    },
  ]

  const differentials = [
    {
      icon: Users,
      title: "Atendimento Humanizado",
      description: "Acolhimento com escuta ativa e atenção em cada detalhe",
    },
    {
      icon: MapPin,
      title: "Localização Estratégica",
      description: "No polo de saúde do Ponto Central, com fácil acesso",
    },
    {
      icon: Building,
      title: "Infraestrutura Confortável",
      description: "Ambiente climatizado, com TV e cantinho do café",
    },
    {
      icon: Zap,
      title: "Tecnologia Moderna",
      description: "Ultrassons de última geração; laboratório exclusivo em breve",
    },
    {
      icon: CheckCircle,
      title: "Tudo em Um Só Lugar",
      description: "Consultas e exames no mesmo local",
    },
    {
      icon: DollarSign,
      title: "Preço Justo",
      description: "Consultas a partir de R$ 70 Reais",
    },
    {
      icon: Shield,
      title: "Profissionais Renomados",
      description: "Atendimento ético e comprometido na cidade",
    },
  ]

  const testimonials = [
    {
      text: "Fui muito bem atendida desde a recepção, profissionais atenciosos!",
      rating: 5,
    },
    {
      text: "Excelente estrutura, preço justo e médicos muito competentes.",
      rating: 5,
    },
    {
      text: "Consegui marcar ultrassom no mesmo dia. Atendimento top!",
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: "Como funciona o atendimento?",
      answer: "Presencial com agendamento via WhatsApp e Telefone através do número (75) 3026‑8494. Atendimento ágil e sem filas.",
    },
    {
      question: "Trabalha com convênios?",
      answer: "Não. Atendemos exclusivamente como clínica particular, com recibo para reembolso.",
    },
    {
      question: "Como agendo minha consulta?",
      answer: "Entre em contato pelo WhatsApp (75) 3026‑8494 ou via redes sociais.",
    },
    {
      question: "Qual o valor das consultas?",
      answer: "Consultas a partir de R$ 70 Reais.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#8dbf44] text-white py-2 px-4 relative">
        <div className="container mx-auto flex flex-row items-center justify-between text-[9px] md:text-lg">
          {/* Esquerda */}
          <div className="flex-1 flex items-center justify-start min-w-0">
            <div className="flex items-center space-x-1 truncate">
              <Phone className="h-4 w-4 min-w-4" />
              <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 truncate">
                <span>(75) 3026‑8494</span>
              </a>
            </div>
          </div>
          {/* Centro */}
          <div className="flex-1 flex items-center justify-center whitespace-nowrap">
            <span className="pr-8">@atendjafeiradesantana</span>
          </div>
          {/* Direita */}
          <div className="flex-1 flex items-center justify-end min-w-0">
            <span className="truncate">Atend Já Feira de Santana</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/atendja.png?height=60&width=200" alt="Atend Já Logo" className="h-14" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-[#008b47] font-medium transition-colors">
                HOME
              </Link>
              <Link href="#especialidades" className="text-gray-700 hover:text-[#008b47] font-medium transition-colors">
                ESPECIALIDADES
              </Link>
              <Link href="#diferenciais" className="text-gray-700 hover:text-[#008b47] font-medium transition-colors">
                DIFERENCIAIS
              </Link>
              <Link href="#sobre" className="text-gray-700 hover:text-[#008b47] font-medium transition-colors">
                SOBRE
              </Link>
              <Link href="#contato" className="text-gray-700 hover:text-[#008b47] font-medium transition-colors">
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
            src="/medbanner1.png?height=600&width=800"
            alt="Médico com estetoscópio"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6">
              Atend Já
              <span className="block md:inline text-[#8dbf44]"> Feira de Santana</span>
            </h1>
            <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Atendimento médico acessível e humanizado, consultas e exames em um só lugar.
            </p>
            <Button size="lg" className="bg-[#8dbf44] hover:bg-[#2ea55c] text-white font-bold px-8 py-3">
              <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                AGENDAR CONSULTA
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Especialidades Section */}
      <section id="especialidades" className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossas Especialidades</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Conheça as especialidades médicas disponíveis na Atend Já Feira de Santana. Clique em cada card para saber
              mais detalhes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {specialties.map((specialty, index) => (
              <Link href={specialty.href} key={index}>
                <Card className="border-2 border-[#008b47] hover:shadow-lg transition-all h-full hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-[#008b47] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      {specialty.image ? (
                        <Image
                          src={specialty.image}
                          alt={specialty.title}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      ) : specialty.icon && (
                        <specialty.icon className="h-8 w-8" />
                      )}
                    </div>
                    <h3 className="font-bold text-[#008b47] text-lg mb-2">{specialty.title}</h3>
                    <p className="text-gray-600">{specialty.description}</p>
                    <div className="mt-4 text-[#2ea55c] font-medium">Saiba mais →</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tratamentos Section */}
      <section className="bg-[#008b47] text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Tratamentos e Procedimentos</h2>
            <p className="text-lg max-w-4xl mx-auto mb-8">
              Na Atend Já, a saúde da sua família é prioridade. Aqui você encontra atendimento humanizado e eficiente
              com diagnósticos e tratamentos de qualidade, sem precisar de plano de saúde.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {treatments.map((treatment, index) => (
              <Card key={index} className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#008b47] text-lg mb-2">{treatment.title}</h3>
                  <p className="text-gray-600">{treatment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

         
          <div className="text-center">
            <Button size="lg" className="bg-[#8dbf44] hover:bg-[#2ea55c] text-white font-medium px-8 py-3">
              <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                AGENDAR EXAME
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Diferenciais</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {differentials.map((item, index) => (
              <div 
                key={index} 
                className={`text-center bg-white p-6 rounded-lg shadow-sm ${
                  index === differentials.length - 1 && differentials.length % 3 !== 0 
                    ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' 
                    : ''
                }`}
              >
                <div className="bg-[#008b47] text-white p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-[#008b47] hover:bg-[#2ea55c] text-white font-bold px-8 py-3">
              <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                AGENDAR CONSULTA
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Conheça a Atend Já Feira de Santana</h2>
              <p className="text-gray-600 mb-6">
                A Atend Já é uma franquia nacional com mais de 100 unidades e 10 anos de experiência. Em Feira de
                Santana, nossa missão é tornar a saúde particular acessível para todos, com qualidade, agilidade e
                humanização.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#008b47] mt-1" />
                  <span className="text-gray-600">Especialistas de diversas áreas médicas</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#008b47] mt-1" />
                  <span className="text-gray-600">Consultórios próprios e climatizados</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#008b47] mt-1" />
                  <span className="text-gray-600">Exames de imagem e preventivos no mesmo endereço</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#008b47] mt-1" />
                  <span className="text-gray-600">Atendimento com escuta, cuidado e acolhimento</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Aqui, o paciente paga apenas pelos serviços que usar, sem mensalidades ou planos. Tudo para garantir
                rapidez, eficiência e respeito.
              </p>
              <Button size="lg" className="bg-[#008b47] hover:bg-[#2ea55c] text-white font-medium px-8 py-3">
                <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                  AGENDAR CONSULTA
                </a>
              </Button>
            </div>
            <div className="relative w-full h-[400px]">
              <CarouselWithAutoplay />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#008b47] text-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que nossos <span className="text-[#8dbf44]">pacientes dizem?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#008b47] text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-[#008b47] hover:bg-[#2ea55c] text-white font-bold px-8 py-3">
              <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                AGENDAR CONSULTA
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="bg-[#008b47] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Entre em contato conosco!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 mb-4" />
              <h4 className="font-semibold mb-2">Endereço</h4>
              <p className="text-center">Rua Cícero Dantas, 221, Ponto Central – Feira de Santana‑BA</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 mb-4" />
              <h4 className="font-semibold mb-2">WhatsApp/Telefone</h4>
              <p>(75) 3026‑8494</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 mb-4" />
              <h4 className="font-semibold mb-2">Redes Sociais</h4>
              <p>@atendjafeiradesantana</p>
              <p>Atend Já Feira de Santana</p>
            </div>
          </div>
          <Button size="lg" className="bg-[#8dbf44] hover:bg-[#2ea55c] text-white font-bold px-8 py-3">
            <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
              AGENDAR CONSULTA
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
