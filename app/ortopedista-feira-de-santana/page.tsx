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
  Stethoscope,
  Calendar,
  Clock4,
  DollarSign as DollarIcon,
  UserCheck as UserCheckIcon,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function OrtopedistaPage() {
  const services = [
    "Consultas ortopédicas completas",
    "Tratamento de dores articulares",
    "Avaliação de lesões esportivas",
    "Tratamento de tendinites e bursites",
    "Diagnóstico de problemas na coluna",
    "Orientação para prevenção de lesões",
    "Encaminhamento para fisioterapia",
  ]

  const benefits = [
    {
      title: "Profissionais Especializados",
      description: "Equipe médica altamente qualificada e experiente em ortopedia",
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
      icon: Clock4,
    },
    {
      title: "Preço Justo",
      description: "Valores acessíveis para consultas e procedimentos",
      icon: DollarIcon,
    },
  ]

  const testimonials = [
    {
      text: "Estava com uma dor no joelho há meses e em uma única consulta o médico identificou o problema e iniciou o tratamento. Já estou muito melhor!",
      rating: 5,
      name: "Carlos Eduardo",
    },
    {
      text: "Atendimento excelente! O ortopedista foi muito atencioso e explicou detalhadamente meu problema na coluna.",
      rating: 5,
      name: "Márcia Santos",
    },
  ]

  const commonProblems = [
    {
      title: "Dor Lombar",
      description:
        "Problema que afeta 80% da população em algum momento da vida. Pode ser causada por má postura, esforço excessivo ou problemas na coluna.",
    },
    {
      title: "Artrose",
      description:
        "Desgaste das articulações que causa dor e limitação de movimentos. Comum em joelhos, quadris e mãos, principalmente após os 50 anos.",
    },
    {
      title: "Tendinite",
      description:
        "Inflamação dos tendões causada por movimentos repetitivos ou sobrecarga. Comum em ombros, cotovelos e punhos.",
    },
    {
      title: "Hérnia de Disco",
      description:
        "Deslocamento do disco intervertebral que pode comprimir nervos e causar dor intensa, formigamento e fraqueza muscular.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#8dbf44] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm md:text-lg">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <span>(75) 3026‑8494</span>
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Mobile: @atendjafeiradesantana */}
            <span className="md:hidden">@atendjafeiradesantana</span>
            {/* Desktop: Atend Já Feira de Santana */}
            <span className="hidden md:inline">Atend Já Feira de Santana</span>
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
            <Button className="bg-[#008b47] hover:bg-[#2ea55c] text-white font-bold text-base md:text-lg px-6">
              <a href="https://api.whatsapp.com/send?phone=557530268494&text=Ol%C3%A1%20sobre%20ortopedista%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
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
            src="/7.png?height=600&width=800"
            alt="Ortopedista examinando paciente"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ortopedista
              <br />
              <span className="text-[#8dbf44]">em Feira de Santana</span>
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              Tratamento especializado para dores articulares, problemas na coluna e lesões musculares com atendimento
              humanizado e preço justo.
            </p>
            <Button size="lg" className="bg-[#8dbf44] hover:bg-[#2ea55c] text-white font-bold text-base md:text-lg px-8 py-3">
              <a href="https://api.whatsapp.com/send?phone=557530268494&text=Ol%C3%A1%20sobre%20ortopedista%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Serviços Ortopédicos</h2>
              <p className="text-gray-600 mb-6">
                Na Atend Já Feira de Santana, oferecemos atendimento ortopédico completo com profissionais qualificados
                para diagnóstico e tratamento de problemas ósseos, articulares e musculares.
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
                Nossos ortopedistas são especializados no diagnóstico e tratamento de diversas condições, desde
                problemas simples até casos mais complexos.
              </p>
              <Button size="lg" className="bg-[#008b47] hover:bg-[#2ea55c] text-white font-bold text-base md:text-lg px-8 py-3">
                <a href="https://api.whatsapp.com/send?phone=557530268494&text=Ol%C3%A1%20sobre%20ortopedista%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
                  📱 Agende sua consulta ortopédica
                </a>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-[#008b47] text-white p-8 rounded-lg">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/ortopedia.png"
                    alt="Ortopedia"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Por que consultar um ortopedista?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#8dbf44] mt-1 flex-shrink-0" />
                    <span>Dores persistentes em articulações ou músculos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#8dbf44] mt-1 flex-shrink-0" />
                    <span>Limitação de movimentos ou dificuldade para realizar atividades diárias</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#8dbf44] mt-1 flex-shrink-0" />
                    <span>Lesões esportivas ou traumas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#8dbf44] mt-1 flex-shrink-0" />
                    <span>Prevenção de problemas ortopédicos e orientação postural</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefícios do Nosso Atendimento Ortopédico</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conheça as vantagens de realizar sua consulta ortopédica na Atend Já Feira de Santana.
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

      {/* Problemas Comuns Section */}
      <section className="bg-[#008b47] text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Problemas Ortopédicos Comuns</h2>
            <p className="text-lg max-w-4xl mx-auto mb-8">
              Conheça os problemas ortopédicos mais frequentes que tratamos em nossa clínica.
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
            <Button size="lg" className="bg-[#8dbf44] hover:bg-[#2ea55c] text-white font-bold text-base md:text-lg px-8 py-3">
              <a href="https://api.whatsapp.com/send?phone=557530268494&text=Ol%C3%A1%20sobre%20ortopedista%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
                📱 Agende sua consulta ortopédica
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Prevenção Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Prevenção de Problemas Ortopédicos</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-6">
                A prevenção é fundamental para evitar problemas ortopédicos. Nossos especialistas recomendam:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Manter boa postura</h4>
                    <p className="text-gray-600 text-sm">Ao sentar, ficar de pé e ao levantar pesos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Praticar exercícios regularmente</h4>
                    <p className="text-gray-600 text-sm">Fortalecimento muscular e alongamentos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Manter peso adequado</h4>
                    <p className="text-gray-600 text-sm">Reduz sobrecarga nas articulações</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#008b47] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fazer pausas durante o trabalho</h4>
                    <p className="text-gray-600 text-sm">Especialmente em atividades repetitivas</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Em caso de dores persistentes ou limitações de movimento, não hesite em consultar um ortopedista. O
                diagnóstico precoce é fundamental para um tratamento eficaz.
              </p>
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

      {/* CTA Section */}
      <section className="bg-[#008b47] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Não deixe a dor limitar sua vida</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Agende uma consulta com nossos ortopedistas e dê o primeiro passo para uma vida sem dores e com mais
            qualidade de movimento.
          </p>
          <Button size="lg" className="bg-[#8dbf44] hover:bg-[#2ea55c] text-white font-bold text-base md:text-lg px-8 py-3">
            <a href="https://api.whatsapp.com/send?phone=557530268494&text=Ol%C3%A1%20sobre%20ortopedista%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
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
