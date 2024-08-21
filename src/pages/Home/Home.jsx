import Style from './Home.module.css'
import imgWelcome from '../../assets/imgWelcome.jpg'
import imgAtardecer from '../../assets/imgAtardecer.jpg'
import imgPlan from "../../assets/imgPlan.jpg"

function Home() {
	return (
		<main id='main' className='text-white gap-20 grid justify-center'>
			<div className='h-screen w-full grid place-items-center content-center gap-6'>
				<img
					className={`${Style.imgWelcome} h-screen object-cover brightness-50 absolute -z-10 w-full top-0 left-0`}
					src={imgWelcome}
					alt='background Image'
				/>
				<img
					className='max-w-24'
					src='./icon.png'
					alt='Logo'
					width='96px'
					height='96px'
				/>
				<h1 className='text-center text-3xl text-balance'>
					¡Conoce tu próximo destino para disfrutar en familia!
				</h1>
				<div className='grid place-items-center relative top-24 gap-4'>
					<a className='text-2xl' href='#content'>
						Ver más
					</a>
					<svg
						className='w-10 animate-bounce animate-infinite animate-ease-in-out'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='2.5'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3'
						/>
					</svg>
				</div>
			</div>

			{/* Section Que Ofrecemos */}
			<section
				id='content'
				className={`${Style.section} h-auto flex flex-col place-items-center content-center px-6 gap-5 lg:flex-row lg:gap-10`}
			>
				<div className='text-center grid gap-2'>
					<h2 className='font-bold text-3xl lg:text-4xl'>
						¿Que <span className='text-green-500'>ofrecemos</span>?
					</h2>
					<p className='text-pretty max-w-xl text-xl lg:text-2xl'>
						Servicio de restaurante, zona de descanso en hamacas, piscina de
						agua natural, actividades de deportes extremos (canyoning o rapel),
						cabalgata ecológica, camping, visita a la cueva Ibanasca,
						avistamiento de aves y cascadas.
					</p>
				</div>
				<div>
					<img
						className='rounded-2xl h-80 lg:max-w-xl object-cover'
						src={imgAtardecer}
						alt='Image'
						width='600'
						height='0'
					/>
				</div>
			</section>

			{/* Section Nuestras Atracciones */}
			<section
				id='content'
				className={`${Style.section} h-auto flex flex-col place-items-center content-center px-6 gap-5 lg:odd:flex-row-reverse lg:gap-10 `}
			>
				<div className='text-center grid gap-2'>
					<h2 className='font-bold text-3xl lg:text-4xl'>
						Nuestras <span className='text-green-500'>atracciones</span>
					</h2>
					<p className='text-pretty max-w-xl text-xl lg:text-2xl'>
						Explora todas las atracciones que tenemos disponibles para que
						disfrutes y descanses de tu rutina!
					</p>
				</div>
				<div>
					<img
						className='rounded-2xl h-80 lg:max-w-xl object-cover'
						src={imgPlan}
						alt='Image-plan'
						width='600'
						height='0'
					/>
				</div>
			</section>

			<section
				id='content'
				className='h-auto grid place-items-center content-center px-6 gap-5 lg:grid-flow-col lg:gap-10'
			>
				Próximamente se añadirá más contenido :D
			</section>
		</main>
	)
}

export default Home
