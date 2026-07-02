interface FooterProps {
  style?: string
}

export default function Footer({ style }: FooterProps) {
  return (
    <footer id="footer" className={`bg-blue w-full mt-20 py-12 ${style ?? ''}`}>
      <section className="max-w-7xl w-6/12 mx-auto text-blue">
        <p className="text-gray-400 font-[300] text-center mt-4">
          ©2023 BETON-CLEF TECHNIQUE Construction Company, Inc. All Rights Reserved
        </p>
      </section>
    </footer>
  )
}
