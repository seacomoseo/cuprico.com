---
slug: electricity-bill-review
title: Free electricity bill review
seo:
  title: Free electricity bill check in Murcia & Alicante | Cúprico
  desc: Send us your Spanish electricity bill and within 24 h we'll tell you if you can pay less. Free, no obligation, and we speak English.
img: /u/servicios/check-electricity-bill-social.webp

base: service
service_types:
- Electricity tariff advice
service_areas:
- San Pedro del Pinatar
- San Javier
- Los Alcázares
- Torre-Pacheco
- Pilar de la Horadada
- Orihuela Costa
- Torrevieja
- Región de Murcia
- Provincia de Alicante
header:
  bi: /u/servicios/revisar-factura-luz.webp
  hanchor: We check your electricity bill for free
  md: |
    We check your electricity bill for free

    Send us a photo of your bill and within 24 h we'll tell you if there's a cheaper option.

others:
  sub: No tie-in contracts · No small print · Free
  request_quote: Upload your bill

landing:
  intro:
    hanchor: Free electricity tariff advice in English
    title: Pay a fair price for your electricity
    sub: Free, clear advice in English
    md: |
      Spanish electricity bills can be confusing. Upload yours and we'll check it for you. If there's a cheaper tariff for you, we'll tell you and help you switch. If you already have the best option, we'll tell you that too.

      - ::schedule:: **We reply within 24 hours.**
      - ::verified:: **We improve your bill if we can.** We compare your case with several suppliers.
      - ::shield:: **No tricks, no tie-in contracts.** We explain everything clearly before you decide.
      - ::star:: **It's free.** We don't charge you for the review or the switch.

      [[Upload your bill]](#contacto)

  form:
    title: Upload your bill
    sub: We reply within 24 hours
    label: Send my bill
    inputs:
    - type: text
      name: Nombre
      label: Name
      req: true
    - type: phone
      name: Teléfono
      label: Phone or WhatsApp
      req: true
    - type: mail
      name: Email
      label: Email
      req: true
    - type: text
      name: Código postal
      label: Postcode
      req: true
    - type: file
      name: Factura
      label: Your electricity bill (PDF or photo)
      accept: .pdf,image/*
      max: 3
      req: true
    - type: select
      name: Tipo
      label: Home or business?
      items:
      - label: Home
      - label: Business
    - type: check
      name: Placas
      label: I'd also like to know how much I'd save with solar panels
    - type: area
      name: Comentarios
      label: Comments (optional)
    consent: |
      I consent to CÚPRICO INSTALACIONES ELÉCTRICAS S.L.U. using my details and my bill to review my case and contact me and, only if I accept an offer, sharing them with the chosen supplier to arrange the contract. More information in the [privacy policy](/en/privacy/ "[nofollow blank]").

  who:
    hanchor: Who checks your electricity bill
    title: Who checks your bill
    sub: An electrician, not a salesperson
    md: |
      Your bill is checked by [José María Tornero](/en/author/j-tornero/), an authorised low-voltage electrician and solar installer. We know electricity bills inside out because we work every day on electrical and solar installations in Murcia and Alicante.

  check:
    hanchor: What we check on your electricity bill
    title: What we check
    sub: Point by point
    md: |
      We check your contracted power and whether you actually use it, what you pay per kWh in each time slot, whether you're on the regulated tariff or the free market, and whether you're paying for extras you don't need. Then we compare your case with the suppliers we work with and tell you which option suits you best.

  where:
    hanchor: Electricity bill checks in the Region of Murcia and the province of Alicante
    title: Where we help
    sub: Region of Murcia and province of Alicante
    md: |
      We do the check remotely, so it doesn't matter where you live in the Region of Murcia or the province of Alicante: Cartagena, Lorca, the Mar Menor, Alicante, Elche, Torrevieja, Orihuela Costa, Benidorm or anywhere else. All we need is a photo of your bill.

  direct:
    title: Prefer to talk to us?
    sub: Call us or send us a WhatsApp

  steps:
    hanchor: How the electricity bill review works
    title: How it works
    sub: Three steps, no paperwork for you
    md: |
      1. **Send us your bill.** A photo from your phone is enough.
      2. **We review it.** We look at your usage, your contracted power and what you pay, and compare it with the suppliers we work with.
      3. **We call you within 24 hours.** We tell you how much you can save. If you're interested, we handle the switch for you. If not, that's fine.

  why:
    hanchor: Why your Spanish electricity bill is so high
    title: Why do you pay so much?
    sub: What makes your bill more expensive
    md: |
      - **Too much contracted power.** Many people pay every month for more power than they use.
      - **A high price per kWh.** Two homes with the same usage can pay very different bills depending on the tariff.
      - **Add-on services.** Maintenance plans, insurance or assistance services you may not need.
      - **Not using the cheaper hours.** With some tariffs, shifting part of your usage to other hours already makes a difference.
      - **No solar panels.** If you have a villa or a house, producing your own electricity is the real way to cut your bill. We can tell you how much you'd save.

  faqs:
  - title: How much does the review cost?
    md: Nothing. The review and the switch are free for you.
  - title: Do I have to switch supplier?
    md: No. We tell you what we've found and you decide. If you already have the best option, we'll tell you.
  - title: Is there a tie-in contract?
    md: We only recommend tariffs without tie-in periods, and we explain everything before you sign.
  - title: Will my electricity be cut off when I switch?
    md: No. Switching supplier is purely administrative. There are no power cuts, nothing changes in your installation and your meter stays the same.
  - title: What details do you need?
    md: Your bill is enough. Only if you decide to switch will we ask for the details needed for the contract.
  - title: Do you help businesses?
    md: Yes, we review bills for homes and businesses in the Region of Murcia and the province of Alicante.
  - title: How long does the switch take?
    md: Between 1 and 3 days from when you sign the contract with the new supplier.
  - title: Do I need to contact my current supplier?
    md: No. You just sign the new contract and answer a short survey to confirm your details. We take care of the rest.
  - title: Do you check business bills on the 3.0TD tariff?
    md: Yes, we also check business bills on the 3.0TD tariff, such as warehouses, shops or restaurants.
  - title: I don't understand my Spanish bill. Can you explain it in English?
    md: Yes. We explain it in English by message, on WhatsApp or by email, step by step.

tpl:
  sections:
  - file: _hero
  - file: factura-intro
  - file: factura-formulario
  - file: factura-pasos
  - file: factura-que-miramos
  - file: factura-quien
  - file: factura-cara
  - file: factura-donde
  - file: factura-faq
  - file: factura-contacto
---
