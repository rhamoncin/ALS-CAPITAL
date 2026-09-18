// Generado por EARNINGS MONITOR/_herramientas/integrar_web.py a partir de informes/*.json. No editar a mano.
const EM_REPORTS = {
 "banks": [
  {
   "sector": "banks",
   "trimestre": "2026-1T",
   "sectorNombre": "Bancos EE.UU.",
   "label": "1T 2026",
   "labelAnterior": "4T 2025",
   "meses": "ene–mar 2026",
   "publicado": "18-sep-2026 (reelaborado)",
   "empresas": [
    {
     "id": "JPM",
     "nombre": "JPMorgan"
    },
    {
     "id": "BAC",
     "nombre": "Bank of America"
    },
    {
     "id": "WFC",
     "nombre": "Wells Fargo"
    }
   ],
   "titulo": "Mercados en récord y un crédito todavía benigno sostienen el beneficio; el margen deja de subir, el capital baja y el petróleo entra en el discurso",
   "tarjeta": "Mercados en récord y crédito benigno sostienen el beneficio; el margen deja de subir y el petróleo entra en el discurso",
   "drivers": "crédito y morosidad · depósitos y su coste · NII y margen · provisiones · capital · actividad de mercados",
   "pregunta": {
    "q": "¿Aguanta el negocio bancario el giro de expectativas de tipos y el shock del petróleo?",
    "a": "En el trimestre, sí. El crédito se comporta mejor que hace un año, el consumidor sigue gastando y los mercados marcan récords. Pero los bancos ya incorporan el petróleo y Oriente Medio a su discurso, y Wells Fargo describe un consumidor cada vez más bifurcado, con el ajuste del gasto esperado para el segundo semestre."
   },
   "takeaways": [
    {
     "lead": "Los mercados de capitales firman un trimestre récord.",
     "texto": "Markets de JPM alcanza 11,6 B$ (+20%), BofA registra su mejor trimestre de la historia en renta variable y Wells Fargo crece un 19% en mercados. Las comisiones de banca de inversión suben un 28% en JPM y un 21% en BofA."
    },
    {
     "lead": "El margen deja de ser el motor.",
     "texto": "El NII crece alrededor de un 9% interanual en JPM y BofA, pero apenas avanza frente al 4T25 y, sin Markets, retrocede en JPM. Wells Fargo recorta su NIM 13 pb (2,47%) por el crecimiento de repo de bajo margen y de depósitos remunerados. BofA, en cambio, eleva su guía de NII para 2026 a +6/8% porque la curva deja de descontar bajadas de tipos."
    },
    {
     "lead": "Crédito benigno, con el repunte estacional habitual.",
     "texto": "Los fallidos en tarjetas suben frente al 4T25, pero quedan por debajo de hace un año en los tres bancos (JPM 3,47%, BofA 3,64%, Wells 4,21%). Las oficinas mejoran: BofA encadena su primer trimestre en más de tres años sin nuevas entradas en dudosos."
    },
    {
     "lead": "El crédito a entidades no bancarias emerge como foco de atención.",
     "texto": "Los préstamos de Wells Fargo a financieras no bancarias alcanzan 210,2 B$, con una pérdida por fraude que la entidad califica de aislada. Dimon habla de estándares más laxos y de que la banca está *sobreganando* con pérdidas de crédito demasiado bajas."
    },
    {
     "lead": "El capital baja en los tres bancos.",
     "texto": "El CET1 cae a 14,3% en JPM, 11,2% en BofA y 10,3% en Wells, con recompras elevadas (8,1 B$, 7,2 B$ y 4,0 B$) y activos ponderados al alza."
    }
   ],
   "cambios": [
    {
     "kpi": "Mercados",
     "dir": "Récord",
     "texto": "Fuerte rebote frente al 4T25: Markets de JPM pasa de 8,2 a 11,6 B$, sales & trading de BofA de 4,5 a 6,3 B$ y Markets de Wells de 1,6 a 2,2 B$."
    },
    {
     "kpi": "Provisiones",
     "dir": "Se normalizan",
     "texto": "La provisión de JPM baja de 4,7 a 2,5 B$ porque el 4T25 incluía 2,2 B$ por la operación de Apple Card. BofA pasa de dotar 21 M$ a liberar 72 M$."
    },
    {
     "kpi": "Fallidos en tarjetas",
     "dir": "Suben (estacional)",
     "texto": "JPM de 3,14% a 3,47%, BofA de 3,40% a 3,64% y Wells de 3,97% a 4,21%. En los tres casos, por debajo del 1T25."
    },
    {
     "kpi": "Margen de intereses",
     "dir": "Se comprime",
     "texto": "NIM de Wells de 2,60% a 2,47%; JPM de 2,54% a 2,50%; BofA prácticamente estable (2,08% a 2,07%)."
    },
    {
     "kpi": "Expectativas de tipos",
     "dir": "Giro",
     "texto": "La curva pasa de descontar bajadas a no descontar ninguna. BofA sube su guía de NII (de +5/7% a +6/8%) y Wells ve un efecto modesto pero positivo."
    },
    {
     "kpi": "Coste de los depósitos",
     "dir": "Baja",
     "texto": "BofA de 1,63% a 1,47%; Wells de 1,44% a 1,43%. Sin competencia por precio, según ambos bancos."
    },
    {
     "kpi": "Capital",
     "dir": "Baja",
     "texto": "CET1 de JPM de 14,6% a 14,3%, de BofA de 11,4% a 11,2% y de Wells de 10,6% a 10,3%."
    },
    {
     "kpi": "Discurso macro",
     "dir": "Nuevo riesgo",
     "texto": "El conflicto en Oriente Medio y el precio de la energía entran en todas las presentaciones. BofA observa la gasolina +16% interanual en el gasto con tarjeta en marzo."
    }
   ],
   "scorecard": [
    {
     "titulo": "Resultados",
     "filas": [
      {
       "kpi": "Ingresos",
       "nota": "variación interanual",
       "v": {
        "JPM": {
         "v": "$50,5B · +10%",
         "c": "4T25: $46,8B (base managed)"
        },
        "BAC": {
         "v": "$30,3B · +7%",
         "c": "4T25: $28,4B"
        },
        "WFC": {
         "v": "$21,4B · +6%",
         "c": "4T25: $21,3B"
        }
       }
      },
      {
       "kpi": "NII",
       "nota": "margen de intereses en $",
       "v": {
        "JPM": {
         "v": "$25,5B · +9%",
         "c": "Sin Markets: $23,3B, +3% (−2% trimestral)"
        },
        "BAC": {
         "v": "$15,9B · +9%",
         "c": "Base FTE; plano trimestral"
        },
        "WFC": {
         "v": "$12,1B · +5%",
         "c": "−2% trimestral; sin Markets +2%"
        }
       }
      },
      {
       "kpi": "BPA diluido",
       "nota": "variación interanual",
       "v": {
        "JPM": {
         "v": "$5,94 · +17%",
         "c": "4T25: $4,63 (incluía Apple Card)"
        },
        "BAC": {
         "v": "$1,11 · +25%",
         "c": "4T25: $0,98"
        },
        "WFC": {
         "v": "$1,60 · +15%",
         "c": "Incluye 135 M$ de beneficio fiscal"
        }
       }
      },
      {
       "kpi": "ROTCE",
       "v": {
        "JPM": {
         "v": "23%",
         "c": "4T25: 18%"
        },
        "BAC": {
         "v": "16,0%",
         "c": "4T25: 14,0%"
        },
        "WFC": {
         "v": "14,5%",
         "c": "4T25: 14,5%"
        }
       }
      },
      {
       "kpi": "Ratio de eficiencia",
       "v": {
        "JPM": {
         "v": "53%",
         "c": "4T25: 51%"
        },
        "BAC": {
         "v": "61,2%",
         "c": "4T25: 61,5%"
        },
        "WFC": {
         "v": "67%",
         "c": "4T25: 64% · estacional"
        }
       }
      }
     ]
    },
    {
     "titulo": "Indicadores sectoriales",
     "filas": [
      {
       "kpi": "Margen de intereses",
       "nota": "NIM; en BofA, net interest yield",
       "v": {
        "JPM": {
         "v": "2,50%",
         "c": "4T25: 2,54%"
        },
        "BAC": {
         "v": "2,07%",
         "c": "4T25: 2,08%"
        },
        "WFC": {
         "v": "2,47%",
         "c": "4T25: 2,60%"
        }
       }
      },
      {
       "kpi": "Préstamos medios",
       "nota": "variación interanual",
       "v": {
        "JPM": {
         "v": "$1,49T · +11%",
         "c": "+2% trimestral"
        },
        "BAC": {
         "v": "$1,19T · +9%",
         "c": "Disposición de líneas de crédito comerciales"
        },
        "WFC": {
         "v": "$996B · +10%",
         "c": "+4% trimestral"
        }
       }
      },
      {
       "kpi": "Depósitos medios",
       "nota": "variación interanual",
       "v": {
        "JPM": {
         "v": "$2,60T · +7%",
         "c": "+1% trimestral"
        },
        "BAC": {
         "v": "$2,02T · +3%",
         "c": "Coste: 1,47% (4T25: 1,63%)"
        },
        "WFC": {
         "v": "$1,42T · +6%",
         "c": "Coste: 1,43% (4T25: 1,44%)"
        }
       }
      },
      {
       "kpi": "Fallidos netos (NCO)",
       "nota": "total préstamos",
       "v": {
        "JPM": {
         "v": "0,67%",
         "c": "4T25: 0,72%"
        },
        "BAC": {
         "v": "0,48%",
         "c": "4T25: 0,44%"
        },
        "WFC": {
         "v": "0,45%",
         "c": "4T25: 0,43%"
        }
       }
      },
      {
       "kpi": "NCO tarjetas de crédito",
       "v": {
        "JPM": {
         "v": "3,47%",
         "c": "4T25: 3,14% · 1T25: 3,58%"
        },
        "BAC": {
         "v": "3,64%",
         "c": "4T25: 3,40% · 1T25: 4,05%"
        },
        "WFC": {
         "v": "4,21%",
         "c": "4T25: 3,97% · 1T25: 4,76%"
        }
       }
      },
      {
       "kpi": "CET1",
       "nota": "método estándar",
       "v": {
        "JPM": {
         "v": "14,3%",
         "c": "4T25: 14,6% · 1T25: 15,4%"
        },
        "BAC": {
         "v": "11,2%",
         "c": "4T25: 11,4% · 1T25: 11,8%"
        },
        "WFC": {
         "v": "10,3%",
         "c": "4T25: 10,6% · 1T25: 11,1%"
        }
       }
      },
      {
       "kpi": "Banca de inversión",
       "nota": "comisiones, interanual",
       "v": {
        "JPM": {
         "v": "$2,9B · +28%",
         "c": "Segmento CIB"
        },
        "BAC": {
         "v": "$1,8B · +21%",
         "c": "Sin operaciones propias"
        },
        "WFC": {
         "v": "$796M · +3%",
         "c": "Línea CIB: +13%"
        }
       }
      },
      {
       "kpi": "Mercados",
       "nota": "ingresos, interanual",
       "v": {
        "JPM": {
         "v": "$11,6B · +20%",
         "c": "Récord; renta variable +17%"
        },
        "BAC": {
         "v": "$6,3B · +12%",
         "c": "Sales & trading sin DVA; renta variable +30%"
        },
        "WFC": {
         "v": "$2,2B · +19%",
         "c": "Renta variable +21%"
        }
       }
      },
      {
       "kpi": "Gasto con tarjeta",
       "nota": "débito + crédito, interanual",
       "v": {
        "JPM": {
         "v": "+9%",
         "c": "$488B en el trimestre"
        },
        "BAC": {
         "v": "+7%",
         "c": "$245B en el trimestre"
        },
        "WFC": {
         "v": "Débito +7% · crédito +9%",
         "c": "$134B y $40B"
        }
       }
      }
     ]
    }
   ],
   "scorecardNota": "B = miles de millones; T = billones. Variaciones según las publica cada banco. Las definiciones no son idénticas entre bancos (base managed o FTE, perímetro de mercados), por lo que las comparaciones entre entidades son orientativas; la tendencia de cada banco es la lectura más fiable.",
   "companias": [
    {
     "e": "JPM",
     "nombre": "JPMorgan",
     "titular": "Récord en mercados y provisiones normalizadas",
     "texto": "BPA de 5,94$ (+17%) y ROTCE del 23%. Markets en récord (11,6 B$) y banca de inversión +28%. El salto trimestral del beneficio se explica en buena parte por la provisión de Apple Card del 4T25. Guía 2026: NII sin Markets ~95 B$ y fallidos en tarjetas ~3,4%."
    },
    {
     "e": "BAC",
     "nombre": "Bank of America",
     "titular": "Eleva la guía de NII",
     "texto": "Ingresos +7%, BPA +25% y ROTCE del 16%, objetivo alcanzado antes de lo previsto. Sube la guía de NII 2026 a +6/8% (desde +5/7%) y el coste de los depósitos cae al 1,47%. Libera 72 M$ de reservas."
    },
    {
     "e": "WFC",
     "nombre": "Wells Fargo",
     "titular": "Crece el balance, cae el margen",
     "texto": "Préstamos +4% trimestral en el primer año sin asset cap, pero el NIM cae 13 pb (2,47%) por repo de bajo margen y depósitos remunerados. Pérdida por fraude aislada en su cartera de NBFI. CET1 del 10,3% y recompra de 4,0 B$."
    }
   ],
   "exhibits": [
    {
     "titulo": "Los fallidos en tarjetas repuntan por estacionalidad, pero siguen por debajo de hace un año",
     "sub": "Tasa de fallidos netos (NCO) en tarjetas de crédito, %",
     "tipo": "line",
     "unidad": "%",
     "dec": 2,
     "trimestres": [
      "1T25",
      "2T25",
      "3T25",
      "4T25",
      "1T26"
     ],
     "series": {
      "JPM": [
       3.58,
       3.4,
       3.15,
       3.14,
       3.47
      ],
      "BAC": [
       4.05,
       3.82,
       3.46,
       3.4,
       3.64
      ],
      "WFC": [
       4.76,
       4.54,
       4.02,
       3.97,
       4.21
      ]
     },
     "fuente": "suplementos financieros de las compañías. JPM: Card Services."
    },
    {
     "titulo": "El margen de Wells Fargo cae con fuerza; JPM y BofA se estabilizan",
     "sub": "Margen de intereses (NIM; BofA: net interest yield), %",
     "tipo": "line",
     "unidad": "%",
     "dec": 2,
     "trimestres": [
      "1T25",
      "2T25",
      "3T25",
      "4T25",
      "1T26"
     ],
     "series": {
      "JPM": [
       2.58,
       2.43,
       2.45,
       2.54,
       2.5
      ],
      "BAC": [
       1.99,
       1.94,
       2.01,
       2.08,
       2.07
      ],
      "WFC": [
       2.67,
       2.68,
       2.61,
       2.6,
       2.47
      ]
     },
     "fuente": "suplementos y presentaciones de resultados. Definiciones no homogéneas entre bancos."
    },
    {
     "titulo": "Los ingresos de mercados rebotan hasta máximos",
     "sub": "Ingresos de Markets / sales & trading, miles de millones de $",
     "tipo": "bar",
     "unidad": "",
     "dec": 1,
     "cero": true,
     "trimestres": [
      "1T25",
      "2T25",
      "3T25",
      "4T25",
      "1T26"
     ],
     "series": {
      "JPM": [
       9.663,
       8.936,
       8.944,
       8.239,
       11.559
      ],
      "BAC": [
       5.646,
       5.379,
       5.348,
       4.533,
       6.324
      ],
      "WFC": [
       1.827,
       1.779,
       1.853,
       1.602,
       2.173
      ]
     },
     "fuente": "suplementos financieros. BofA: sales & trading sin DVA. Wells Fargo: CIB Markets."
    },
    {
     "titulo": "El capital baja en los tres bancos",
     "sub": "Ratio CET1, método estándar, %",
     "tipo": "line",
     "unidad": "%",
     "dec": 1,
     "trimestres": [
      "1T25",
      "2T25",
      "3T25",
      "4T25",
      "1T26"
     ],
     "series": {
      "JPM": [
       15.4,
       15.1,
       14.8,
       14.6,
       14.3
      ],
      "BAC": [
       11.8,
       11.5,
       11.6,
       11.4,
       11.2
      ],
      "WFC": [
       11.1,
       11.1,
       11.0,
       10.6,
       10.3
      ]
     },
     "fuente": "suplementos financieros y 10-Q. 1T26: estimación preliminar de cada banco."
    }
   ],
   "temas": [
    {
     "titulo": "Mercados de capitales: récord en un trimestre de volatilidad",
     "parrafos": [
      "El trimestre lo sostienen las comisiones y la intermediación. La volatilidad geopolítica y el rebalanceo de carteras disparan la actividad de clientes: JPM marca un récord en Markets, BofA firma su mejor trimestre en renta variable sin un solo día de pérdidas en trading, y Wells Fargo crece un 36% frente al 4T25 en mercados. La banca de inversión se apoya en asesoramiento y salidas a bolsa, con algunos retrasos en OPVs al final del trimestre.",
      "La contrapartida es la dependencia de un negocio cíclico. En el caso de JPM, el NII sin Markets cae un 2% frente al 4T25, así que el crecimiento del beneficio descansa en actividad de mercado y en la normalización de provisiones."
     ],
     "evidencias": [
      {
       "e": "JPM",
       "t": "Markets 11,6 B$ (+20%): renta fija 7,1 B$ (+21%) y renta variable 4,5 B$ (+17%). Banca de inversión +28% por asesoramiento y ECM."
      },
      {
       "e": "BAC",
       "t": "Sales & trading 6,3 B$ sin DVA (+12%), con renta variable +30% en su mejor trimestre histórico. Banca de inversión +21%."
      },
      {
       "e": "WFC",
       "t": "CIB Markets 2,2 B$ (+19%) y banca de inversión de la línea CIB +13%. Entra en el 2T con un pipeline fuerte en M&A y ECM."
      }
     ]
    },
    {
     "titulo": "NII: el volumen compensa un margen que deja de subir",
     "parrafos": [
      "El NII sigue creciendo en torno a un 9% interanual en JPM y BofA, pero ya no avanza frente al 4T25: menos días, bajadas de tipos del 4T25 ya reflejadas y, en Wells Fargo, un balance que crece con activos de bajo margen. El caso de Wells es el más visible: el NIM cae 13 pb, hasta el 2,47%, por el aumento de repo de Treasuries en su negocio de mercados y de depósitos remunerados.",
      "El giro de la curva cambia las guías. Con el mercado sin descontar bajadas, BofA eleva su previsión de NII para 2026 y Wells lo considera positivo, aunque modesto. El coste de los depósitos sigue bajando y ningún banco percibe competencia por precio."
     ],
     "evidencias": [
      {
       "e": "JPM",
       "t": "NII sin Markets 23,3 B$ (+3% interanual; −2% trimestral); rendimiento sin Markets de 3,72% (3,76% en el 4T25)."
      },
      {
       "e": "BAC",
       "t": "NII FTE plano frente al 4T25 pese a tener dos días menos; coste total de los depósitos de 1,47% (−16 pb)."
      },
      {
       "e": "WFC",
       "t": "NII sin Markets −3% trimestral; el NII de Markets sube a 481 M$. Anticipa algo más de compresión del margen en el 2T."
      }
     ]
    },
    {
     "titulo": "Crédito: estacionalidad en tarjetas, mejora en oficinas y primeras alertas en crédito no bancario",
     "parrafos": [
      "Las cifras de crédito son sanas. Los fallidos en tarjetas suben frente al 4T25 por estacionalidad, pero están entre 11 y 55 pb por debajo de hace un año; la morosidad temprana se mantiene estable. En inmobiliario comercial, las oficinas dejan de ser el foco: BofA no registra nuevas entradas en dudosos de oficinas por primera vez en más de tres años y Wells libera reservas.",
      "La atención se desplaza al crédito mayorista. Wells Fargo registra una pérdida por fraude en su cartera de financiación inmobiliaria a entidades no bancarias, que considera aislada tras revisarla. JPM dota 327 M$ en Wholesale por cambios en la calidad de ciertas exposiciones. BofA, en cambio, no aprecia relajación de estándares y describe el ajuste del crédito privado como una repreciación de liquidez, no un deterioro sistémico."
     ],
     "evidencias": [
      {
       "e": "JPM",
       "t": "NCO de Card Services 3,47% (3,58% un año antes); morosidad a 30 días de 2,17%. La exposición criticada mayorista sube de 48,5 a 51,4 B$."
      },
      {
       "e": "BAC",
       "t": "NCO de CRE de 56 M$ (123 M$ un año antes); los préstamos dudosos de CRE bajan a 1,2 B$ desde 2,1 B$."
      },
      {
       "e": "WFC",
       "t": "Préstamos a financieras no bancarias de 210,2 B$ (151,6 B$ hace un año); dudosos de NBFI de 237 M$ frente a 16 M$ un año antes."
      }
     ]
    },
    {
     "titulo": "Consumidor: sigue gastando, pero la gasolina y la bifurcación entran en el discurso",
     "parrafos": [
      "El gasto con tarjeta crece entre un 7% y un 9% interanual y los bancos no ven deterioro en la capacidad de pago. BofA, que divide a sus clientes por tercios de renta, observa crecimiento del gasto y de los salarios en todos los tramos, y ata la lectura al empleo.",
      "Wells Fargo es más cauto: habla de un consumidor *resistente en el agregado pero cada vez más bifurcado*, con mayor tensión en los hogares de menor renta. La gasolina gana peso en el gasto (del 6% al 7% del débito en Wells; +16% interanual en BofA en marzo) y Wells espera que el ajuste llegue en la segunda mitad del año."
     ],
     "evidencias": [
      {
       "e": "JPM",
       "t": "Volumen de tarjetas +9% interanual; más de 450.000 cuentas corrientes netas nuevas."
      },
      {
       "e": "BAC",
       "t": "Gasto con débito y crédito +6% en el trimestre; pagos totales de clientes +5% sostenido."
      },
      {
       "e": "WFC",
       "t": "Débito +7% y crédito +9%; morosidad temprana en auto y tarjetas a la baja interanual."
      }
     ]
    },
    {
     "titulo": "Capital: recompras elevadas y CET1 a la baja a la espera de las nuevas reglas",
     "parrafos": [
      "Los tres bancos devuelven prácticamente todo su beneficio y más, y el CET1 baja por el efecto combinado de recompras y crecimiento de activos ponderados. Las re-propuestas de Basilea III y del recargo G-SIB se leen como favorables: BofA espera menores requerimientos totales y Wells estima una reducción de sus activos ponderados de ~7%.",
      "Dimon es el más prudente en el uso del capital: cifra el exceso en 40–50.000 M$, pero dice no sentirse cómodo recomprando acciones a estos precios."
     ],
     "evidencias": [
      {
       "e": "JPM",
       "t": "Recompras netas de 8,1 B$ y payout del 82%; los activos ponderados suben unos 60.000 M$."
      },
      {
       "e": "BAC",
       "t": "Devuelve 9,3 B$ (7,2 B$ en recompras) con un colchón objetivo de ~50 pb sobre su mínimo del 10%."
      },
      {
       "e": "WFC",
       "t": "Recompra 4,0 B$; mantiene el objetivo de CET1 del 10–10,5% hasta que se aprueben las reglas."
      }
     ]
    }
   ],
   "citas": [
    {
     "texto": "The U.S. economy remained resilient in the quarter, with consumers still earning and spending and businesses still healthy.",
     "quien": "Jamie Dimon, CEO",
     "contexto": "JPMorgan, nota de resultados del 1T26"
    },
    {
     "texto": "Resilient in the aggregate, but increasingly bifurcated beneath the surface.",
     "quien": "Charlie Scharf, CEO",
     "contexto": "Wells Fargo, call del 1T26, sobre el consumidor"
    }
   ],
   "pulso": {
    "etiqueta": "Después del trimestre · conferencias del 27 de mayo",
    "titulo": "A mitad del 2T, los bancos anticipan otro buen trimestre en mercados y un consumidor que aguanta; Dimon advierte de exuberancia",
    "parrafos": [
     "Las intervenciones de finales de mayo apuntan a un 2T sólido: mercados y banca de inversión creciendo a doble dígito, NII en la parte alta de las guías y morosidad estable o a la baja. Wells Fargo describe un gasto del consumidor *incluso más fuerte* que semanas antes, y BofA mantiene flujos de gasto en torno al +5%.",
     "El tono de fondo es más prudente. Dimon compara la euforia de los mercados con 1972, 1986, 2000 y 2007, advierte de revisiones de valoración en crédito privado y cree que la banca está *sobreganando* con pérdidas de crédito demasiado bajas. BofA Research rebaja el crecimiento de EE.UU. para 2026 al 2,2% por el petróleo. Con los resultados del 2T ya publicados, las guías de mercados de mayo se quedaron cortas: el 2T cerró con crecimientos del 24% al 35%."
    ],
    "bullets": [
     {
      "e": "JPM",
      "t": "Markets e IB del 2T, en línea con el consenso (+11% y +10%) o *algo mejor*. Gasto 2026 hacia ~106 B$. Exceso de capital de 40–50.000 M$."
     },
     {
      "e": "BAC",
      "t": "Sales & trading del 2T en torno a +15%; NII en la parte alta del +6/8%. Problemas de asequibilidad en hogares con menos de 100.000 $ de renta."
     },
     {
      "e": "WFC",
      "t": "Markets y banca de inversión creciendo en torno al 15%. Riesgo principal: un petróleo alto durante más tiempo."
     }
    ]
   },
   "macroIntro": "Los tres bancos describen una economía **resistente y con apoyos claros** (estímulo fiscal, desregulación, inversión en IA), pero el trimestre introduce dos cambios de fondo: la curva deja de descontar bajadas de tipos y el petróleo pasa a ser un riesgo explícito para el consumidor.",
   "macro": [
    {
     "tema": "Consumo",
     "texto": "El gasto con tarjeta crece entre un 7% y un 9% y el empleo sostiene la capacidad de pago. La gasolina gana peso en la cesta y Wells Fargo detecta más tensión en las rentas bajas; BofA, en cambio, ve el gasto crecer en todos los tramos de renta.",
     "vs": "Frente al 4T25: gasto estable; aparece la bifurcación como riesgo."
    },
    {
     "tema": "Crédito",
     "texto": "Calidad crediticia buena, con repunte estacional en tarjetas y mejora en oficinas. El crecimiento y las primeras incidencias se concentran en el crédito a entidades no bancarias.",
     "vs": "Frente al 4T25: sin deterioro; el foco se desplaza de las oficinas al crédito no bancario."
    },
    {
     "tema": "Inversión empresarial",
     "texto": "Los préstamos crecen un 9–11% interanual. En BofA, por mayor disposición de líneas de crédito para circulante; en Wells, por nuevos clientes y no por mayor uso de las líneas. Las empresas afrontan el año con cautela, pero la demanda de crédito existe.",
     "vs": "Frente al 4T25: crecimiento del crédito más intenso."
    },
    {
     "tema": "Tipos y condiciones financieras",
     "texto": "El mercado deja de descontar bajadas de tipos, lo que mejora las perspectivas de NII sin encarecer todavía los depósitos. Los mercados siguen muy activos pese a la volatilidad geopolítica.",
     "vs": "Frente al 4T25: tipos más altos durante más tiempo; mercados más activos."
    }
   ],
   "vigilar": [
    "Evolución de fallidos y provisiones: si el repunte en tarjetas es solo estacional.",
    "Crecimiento del crédito: si refleja demanda sana o un aumento del riesgo futuro.",
    "Coste y mix de los depósitos con tipos más altos durante más tiempo.",
    "Inmobiliario comercial, especialmente oficinas.",
    "Gasto con tarjeta y señales de presión en rentas bajas, con la gasolina al alza.",
    "Banca de inversión y mercados como termómetro del apetito por el riesgo.",
    "IA y eficiencia: plantillas y costes unitarios."
   ],
   "proximo": "Siguiente informe: 2T 2026 (resultados publicados a mediados de julio).",
   "cobertura": [
    {
     "empresa": "JPMorgan Chase",
     "fiscal": "1T 2026",
     "meses": "ene–mar",
     "publicado": "14-abr-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/19617/000162828026024990/a1q26erfexhibit991narrative.htm"
      },
      {
       "t": "Suplemento",
       "url": "https://www.sec.gov/Archives/edgar/data/19617/000162828026024990/a1q26erfex992supplement.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/19617/000162828026029344/jpm-20260331.htm"
      },
      {
       "t": "Conferencia 27-may"
      }
     ]
    },
    {
     "empresa": "Bank of America",
     "fiscal": "1T 2026",
     "meses": "ene–mar",
     "publicado": "15-abr-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/70858/000007085826000222/bac03312026ex991.htm"
      },
      {
       "t": "Suplemento",
       "url": "https://www.sec.gov/Archives/edgar/data/70858/000007085826000222/bac-03312026ex993.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/70858/000007085826000249/bac-20260331.htm"
      },
      {
       "t": "Call 15-abr y conferencia 27-may"
      }
     ]
    },
    {
     "empresa": "Wells Fargo",
     "fiscal": "1T 2026",
     "meses": "ene–mar",
     "publicado": "14-abr-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/72971/000007297126000213/wfc1qer04-14x26ex991xrelea.htm"
      },
      {
       "t": "Suplemento",
       "url": "https://www.sec.gov/Archives/edgar/data/72971/000007297126000213/wfc1qer04-14x26ex992xsuppl.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/72971/000007297126000217/wfc-20260331.htm"
      },
      {
       "t": "Call 14-abr y conferencia 27-may"
      }
     ]
    }
   ],
   "metodo": "Informe reelaborado en septiembre de 2026 con el formato actual a partir de los documentos originales; sustituye a la versión publicada en junio. Trimestre natural: cada compañía se asigna al trimestre natural con el que comparte más días de su periodo fiscal (en bancos coinciden). Cifras según las publican las compañías. Para JPM no se dispuso del transcript de la call de resultados. Las conferencias de mayo se refieren al 2T y se presentan por separado.",
   "glosario": [
    {
     "t": "NII",
     "d": "Ingreso neto por intereses: lo que el banco cobra por préstamos e inversiones menos lo que paga por depósitos y financiación."
    },
    {
     "t": "NIM",
     "d": "Margen de intereses sobre activos rentables. BofA publica el equivalente como net interest yield."
    },
    {
     "t": "NCO",
     "d": "Fallidos netos: préstamos dados por perdidos, descontadas las recuperaciones, en % de la cartera."
    },
    {
     "t": "CET1",
     "d": "Capital de máxima calidad sobre activos ponderados por riesgo; determina la capacidad de crecer y de remunerar al accionista."
    },
    {
     "t": "RWA",
     "d": "Activos ponderados por riesgo: el denominador de los ratios de capital."
    },
    {
     "t": "NBFI",
     "d": "Entidades financieras no bancarias (gestoras, fondos, crédito privado) a las que prestan los bancos."
    },
    {
     "t": "ROTCE",
     "d": "Rentabilidad sobre el capital tangible ordinario."
    },
    {
     "t": "Markets",
     "d": "Ingresos por intermediación en renta fija, divisas, materias primas (FICC) y renta variable."
    }
   ]
  },
  {
   "sectorNombre": "Bancos EE.UU.",
   "label": "2T 2026",
   "labelAnterior": "1T 2026",
   "meses": "abr–jun 2026",
   "publicado": "18-sep-2026",
   "empresas": [
    {
     "id": "JPM",
     "nombre": "JPMorgan"
    },
    {
     "id": "BAC",
     "nombre": "Bank of America"
    },
    {
     "id": "WFC",
     "nombre": "Wells Fargo"
    }
   ],
   "titulo": "Mercados de capitales y un crédito mejor de lo previsto llevan el beneficio a máximos; el margen ya no acompaña y el capital empieza a ser el límite",
   "drivers": "crédito y morosidad · depósitos y su coste · NII y margen · provisiones · capital · actividad de mercados",
   "pregunta": {
    "q": "¿La normalización del crédito que se veía en el 1T se ha convertido en deterioro?",
    "a": "No. En el 2T los fallidos en tarjetas bajan en los tres bancos, las dotaciones a reservas son mínimas y los equipos directivos describen un consumidor que gasta y paga. El riesgo que vigilan ya no está en los hogares, sino en el crédito a entidades no bancarias y a la inversión en IA, que es la parte del balance que más crece."
   },
   "takeaways": [
    {
     "lead": "Los mercados de capitales explican la mayor parte de la sorpresa.",
     "texto": "Markets crece un 35% en JPM, sales & trading un 33% en Bank of America y un 24% en Wells Fargo, con renta variable entre +64% y +86%. Las comisiones de banca de inversión suben entre un 30% y un 50%. JPM advierte de que parte de la actividad se ha adelantado y de que el trimestre en renta variable será difícil de repetir."
    },
    {
     "lead": "El crédito al consumo mejora en lugar de seguir normalizándose.",
     "texto": "La tasa de fallidos en tarjetas baja en los tres bancos frente al 1T (JPM 3,34%, BofA 3,55%, Wells 4,18%) y la morosidad temprana también cae. Las dotaciones netas a reservas son mínimas. El riesgo que preocupa a los equipos directivos está ahora en el crédito mayorista y no bancario, no en el consumidor."
    },
    {
     "lead": "El NII crece por volumen, no por margen.",
     "texto": "JPM y Wells Fargo comprimen margen (NIM de 2,40% y 2,43%) y crecen gracias a depósitos y préstamos; solo BofA amplía margen por la repreciación de activos a tipo fijo. Aun así, JPM y BofA elevan su guía de NII para 2026."
    },
    {
     "lead": "El balance crece más deprisa que el capital.",
     "texto": "Los préstamos medios crecen entre un 8% y un 12% interanual, con peso creciente de la financiación a entidades no bancarias y a la inversión en IA. El CET1 de JPM cae por cuarto trimestre seguido (14,1%) y el de Wells Fargo se sitúa en la parte baja de su rango objetivo (10,3%)."
    },
    {
     "lead": "Septiembre enfría parte del optimismo.",
     "texto": "En las conferencias de mitad de trimestre BofA anticipa comisiones de banca de inversión inferiores a las del 3T25 y rebaja su objetivo de apalancamiento operativo; el gasto de sus clientes se modera al +4% en agosto. JPM, en cambio, espera crecer en torno al 15–19% en banca de inversión y mercados."
    }
   ],
   "cambios": [
    {
     "kpi": "Crédito al consumo",
     "dir": "Mejora",
     "texto": "En el 1T la lectura era de normalización. En el 2T bajan los fallidos y la morosidad de tarjetas en los tres bancos, y JPM rebaja su previsión de fallidos en tarjetas para 2026 del ~3,4% al ~3,2% por un comportamiento del crédito mejor de lo esperado."
    },
    {
     "kpi": "Mercados y banca de inversión",
     "dir": "Acelera",
     "texto": "Markets de JPM pasa de 11,6 a 12,1 B$; las comisiones de banca de inversión de BofA, de 1,84 a 2,14 B$. Renta variable en máximos en los tres."
    },
    {
     "kpi": "Margen de intereses",
     "dir": "Se comprime",
     "texto": "NIM de JPM de 2,50% a 2,40% y de Wells de 2,47% a 2,43%. La caída de Wells se modera (−4 pb frente a −13 pb en el 1T). BofA, estable en 2,08%."
    },
    {
     "kpi": "Guía de NII 2026",
     "dir": "Al alza",
     "texto": "JPM sube la de NII sin Markets de ~95 a ~96,5 B$ (total, de ~103 a ~105,5 B$); BofA pasa a la parte alta del +6/8%. Wells la mantiene en ~50 B$."
    },
    {
     "kpi": "Capital",
     "dir": "Se estrecha",
     "texto": "CET1 de JPM de 14,3% a 14,1%; BofA y Wells, sin cambios (11,2% y 10,3%), pero Wells reduce la recompra trimestral a 3,0 B$."
    },
    {
     "kpi": "Lectura del consumidor",
     "dir": "Revisada",
     "texto": "En el 1T Wells Fargo describía un consumidor cada vez más bifurcado. En el 2T su CFO dice no ver cambios en ninguna cohorte de renta, y JPM tampoco la aprecia; JPM mantiene en vigilancia la cohorte con salario real negativo."
    }
   ],
   "seguimiento": [
    {
     "kpi": "Fallidos (NCO) y provisiones",
     "dir": "Sin deterioro",
     "texto": "NCO total estable o a la baja (JPM 0,66%, BofA 0,47%, Wells 0,34%) y dotaciones netas mínimas; BofA libera 46 M$."
    },
    {
     "kpi": "Crecimiento del crédito",
     "dir": "Acelera",
     "texto": "Préstamos +8% a +12% interanual. La demanda es amplia, pero crece sobre todo la financiación a entidades no bancarias y a infraestructura de IA, donde se concentra ahora la cautela."
    },
    {
     "kpi": "Coste y mix de depósitos",
     "dir": "Mixto",
     "texto": "BofA baja el tipo pagado a 1,46% por mix; Wells lo sube a 1,51% por el desplazamiento hacia depósitos remunerados. JPM advierte del riesgo de búsqueda de rentabilidad por los depositantes."
    },
    {
     "kpi": "CRE, especialmente oficinas",
     "dir": "Mejora",
     "texto": "BofA registra 2 M$ de fallidos en CRE (56 M$ en el 1T) y reduce su exposición criticada a oficinas; Wells libera reservas en oficinas."
    },
    {
     "kpi": "Gasto con tarjeta y rentas bajas",
     "dir": "Sin señal clara",
     "texto": "Gasto +8% a +12%. JPM y Wells no ven divergencia por renta en sus datos; las señales de presión en rentas bajas siguen siendo puntuales."
    },
    {
     "kpi": "Banca de inversión y mercados",
     "dir": "Se intensifica",
     "texto": "Máximos en renta variable y comisiones de banca de inversión +30% a +50%. En septiembre BofA anticipa un 3T más flojo; JPM, no."
    },
    {
     "kpi": "IA y eficiencia",
     "dir": "Avanza",
     "texto": "La ratio de eficiencia mejora en los tres y la plantilla de Wells cae un 7% interanual. En septiembre BofA cifra en 400 M$ el coste y en 800 M$ el beneficio de sus casos de uso implantados."
    },
    {
     "kpi": "Guías de mayo para el 2T",
     "dir": "Superadas",
     "texto": "En las conferencias del 27 de mayo los bancos apuntaban a crecimientos en mercados del orden del 11–15% (JPM, BofA) y en torno al 15% (Wells). El 2T cerró con +35%, +33% y +24%."
    }
   ],
   "scorecard": [
    {
     "titulo": "Resultados",
     "filas": [
      {
       "kpi": "Ingresos",
       "nota": "variación interanual",
       "v": {
        "JPM": {
         "v": "$58,0B · +27%",
         "c": "+15% sin partidas significativas (base managed)"
        },
        "BAC": {
         "v": "$31,6B · +15%",
         "c": "1T26: $30,3B"
        },
        "WFC": {
         "v": "$22,6B · +9%",
         "c": "1T26: $21,4B"
        }
       }
      },
      {
       "kpi": "NII",
       "nota": "margen de intereses en $",
       "v": {
        "JPM": {
         "v": "$25,6B · +10%",
         "c": "Sin Markets: $23,7B, +4%"
        },
        "BAC": {
         "v": "$16,2B · +9%",
         "c": "Base FTE"
        },
        "WFC": {
         "v": "$12,3B · +5%",
         "c": "Sin Markets: +2%"
        }
       }
      },
      {
       "kpi": "BPA diluido",
       "nota": "variación interanual",
       "v": {
        "JPM": {
         "v": "$7,70 · +47%",
         "c": "$6,14 sin venta de Visa y participaciones"
        },
        "BAC": {
         "v": "$1,21 · +34%",
         "c": "1T26: $1,11"
        },
        "WFC": {
         "v": "$2,00 · +25%",
         "c": "Incluye $847M de plusvalías de capital riesgo"
        }
       }
      },
      {
       "kpi": "ROTCE",
       "v": {
        "JPM": {
         "v": "29%",
         "c": "23% ajustado · 1T26: 23%"
        },
        "BAC": {
         "v": "17,0%",
         "c": "1T26: 16,0%"
        },
        "WFC": {
         "v": "17,7%",
         "c": "1T26: 14,5%"
        }
       }
      },
      {
       "kpi": "Ratio de eficiencia",
       "v": {
        "JPM": {
         "v": "47%",
         "c": "1T26: 53%"
        },
        "BAC": {
         "v": "59,0%",
         "c": "1T26: 61,2%"
        },
        "WFC": {
         "v": "60%",
         "c": "1T26: 67%"
        }
       }
      }
     ]
    },
    {
     "titulo": "Indicadores sectoriales",
     "filas": [
      {
       "kpi": "Margen de intereses",
       "nota": "NIM; en BofA, net interest yield",
       "v": {
        "JPM": {
         "v": "2,40%",
         "c": "1T26: 2,50%"
        },
        "BAC": {
         "v": "2,08%",
         "c": "1T26: 2,07%"
        },
        "WFC": {
         "v": "2,43%",
         "c": "1T26: 2,47%"
        }
       }
      },
      {
       "kpi": "Préstamos medios",
       "nota": "variación interanual",
       "v": {
        "JPM": {
         "v": "$1,52T · +10%",
         "c": "+2% trimestral"
        },
        "BAC": {
         "v": "$1,22T · +8%",
         "c": "Comerciales +11%"
        },
        "WFC": {
         "v": "$1,03T · +12%",
         "c": "+3% trimestral"
        }
       }
      },
      {
       "kpi": "Depósitos medios",
       "nota": "variación interanual",
       "v": {
        "JPM": {
         "v": "$2,69T · +7%",
         "c": "+3% trimestral"
        },
        "BAC": {
         "v": "$2,02T · >+2%",
         "c": "Coste: 1,46% (1T26: 1,47%)"
        },
        "WFC": {
         "v": "$1,47T · +10%",
         "c": "Coste: 1,51% (1T26: 1,43%)"
        }
       }
      },
      {
       "kpi": "Fallidos netos (NCO)",
       "nota": "total préstamos",
       "v": {
        "JPM": {
         "v": "0,66%",
         "c": "1T26: 0,67%"
        },
        "BAC": {
         "v": "0,47%",
         "c": "1T26: 0,48%"
        },
        "WFC": {
         "v": "0,34%",
         "c": "1T26: 0,45%"
        }
       }
      },
      {
       "kpi": "NCO tarjetas de crédito",
       "v": {
        "JPM": {
         "v": "3,34%",
         "c": "1T26: 3,47% · Card Services"
        },
        "BAC": {
         "v": "3,55%",
         "c": "1T26: 3,64%"
        },
        "WFC": {
         "v": "4,18%",
         "c": "1T26: 4,21%"
        }
       }
      },
      {
       "kpi": "CET1",
       "nota": "método estándar",
       "v": {
        "JPM": {
         "v": "14,1%",
         "c": "1T26: 14,3% · 2T25: 15,1%"
        },
        "BAC": {
         "v": "11,2%",
         "c": "1T26: 11,2% · 2T25: 11,5%"
        },
        "WFC": {
         "v": "10,3%",
         "c": "1T26: 10,3% · 2T25: 11,1%"
        }
       }
      },
      {
       "kpi": "Banca de inversión",
       "nota": "comisiones, interanual",
       "v": {
        "JPM": {
         "v": "$3,3B · +30%",
         "c": "Segmento CIB"
        },
        "BAC": {
         "v": "$2,1B · +50%",
         "c": "Sin operaciones propias"
        },
        "WFC": {
         "v": "$939M · +35%",
         "c": "Récord de la entidad"
        }
       }
      },
      {
       "kpi": "Mercados",
       "nota": "ingresos, interanual",
       "v": {
        "JPM": {
         "v": "$12,1B · +35%",
         "c": "Renta variable +86%"
        },
        "BAC": {
         "v": "$7,2B · +33%",
         "c": "Sales & trading sin DVA; renta variable +70%"
        },
        "WFC": {
         "v": "$2,2B · +24%",
         "c": "Renta variable +64%"
        }
       }
      },
      {
       "kpi": "Gasto con tarjeta",
       "nota": "débito + crédito, interanual",
       "v": {
        "JPM": {
         "v": "+10%",
         "c": "$536B en el trimestre"
        },
        "BAC": {
         "v": "+9%",
         "c": "$266B en el trimestre"
        },
        "WFC": {
         "v": "Débito +8% · crédito +12%",
         "c": "$145B y $45B"
        }
       }
      }
     ]
    }
   ],
   "scorecardNota": "B = miles de millones; T = billones. Variaciones según las publica cada banco. Las definiciones no son idénticas entre bancos (base managed o FTE, perímetro de mercados), por lo que las comparaciones entre entidades son orientativas; la tendencia de cada banco es la lectura más fiable.",
   "companias": [
    {
     "e": "JPM",
     "nombre": "JPMorgan",
     "titular": "Récord, con ayuda de partidas puntuales",
     "texto": "BPA de 7,70$ (6,14$ sin Visa y participaciones) y ROTCE ajustado del 23%. Markets +35%. Sube la guía de NII sin Markets a ~96,5 B$, pero el NIM cae al 2,40% y el CET1 baja por cuarto trimestre (14,1%)."
    },
    {
     "e": "BAC",
     "nombre": "Bank of America",
     "titular": "El único de los tres que amplía margen",
     "texto": "Ingresos +15% y BPA +34%. El net interest yield sube a 2,08% por la repreciación de activos a tipo fijo y el NII apunta a +8% en 2026. Banca de inversión +50%, aunque en septiembre anticipa un 3T por debajo del año anterior."
    },
    {
     "e": "WFC",
     "nombre": "Wells Fargo",
     "titular": "Comisiones y eficiencia tras el fin del asset cap",
     "texto": "BPA de 2,00$ (+25%), con 847 M$ de capital riesgo. Préstamos +12% y eficiencia del 60% (67% en el 1T). El NIM sigue bajando (2,43%), cada vez menos, y el CET1 (10,3%) limita la recompra."
    }
   ],
   "exhibits": [
    {
     "titulo": "Los fallidos en tarjetas bajan en los tres bancos tras el repunte estacional del 1T",
     "sub": "Tasa de fallidos netos (NCO) en tarjetas de crédito, %",
     "tipo": "line",
     "unidad": "%",
     "dec": 2,
     "trimestres": [
      "2T25",
      "3T25",
      "4T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "JPM": [
       3.4,
       3.15,
       3.14,
       3.47,
       3.34
      ],
      "BAC": [
       3.82,
       3.46,
       3.4,
       3.64,
       3.55
      ],
      "WFC": [
       4.54,
       4.02,
       3.97,
       4.21,
       4.18
      ]
     },
     "fuente": "suplementos financieros de las compañías. JPM: Card Services."
    },
    {
     "titulo": "El margen se comprime en JPM y Wells Fargo; BofA sigue ampliándolo",
     "sub": "Margen de intereses (NIM; BofA: net interest yield), %",
     "tipo": "line",
     "unidad": "%",
     "dec": 2,
     "trimestres": [
      "2T25",
      "3T25",
      "4T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "JPM": [
       2.43,
       2.45,
       2.54,
       2.5,
       2.4
      ],
      "BAC": [
       1.94,
       2.01,
       2.08,
       2.07,
       2.08
      ],
      "WFC": [
       2.68,
       2.61,
       2.6,
       2.47,
       2.43
      ]
     },
     "fuente": "suplementos y presentaciones de resultados. Definiciones no homogéneas entre bancos."
    },
    {
     "titulo": "Los ingresos de mercados marcan máximos en el primer semestre",
     "sub": "Ingresos de Markets / sales & trading, miles de millones de $",
     "tipo": "bar",
     "unidad": "",
     "dec": 1,
     "cero": true,
     "trimestres": [
      "2T25",
      "3T25",
      "4T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "JPM": [
       8.936,
       8.944,
       8.239,
       11.559,
       12.078
      ],
      "BAC": [
       5.379,
       5.348,
       4.533,
       6.324,
       7.155
      ],
      "WFC": [
       1.779,
       1.853,
       1.602,
       2.173,
       2.206
      ]
     },
     "fuente": "suplementos financieros. BofA: sales & trading sin DVA. Wells Fargo: CIB Total Markets."
    },
    {
     "titulo": "El crecimiento del balance consume capital",
     "sub": "Ratio CET1, método estándar, %",
     "tipo": "line",
     "unidad": "%",
     "dec": 1,
     "trimestres": [
      "2T25",
      "3T25",
      "4T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "JPM": [
       15.1,
       14.8,
       14.6,
       14.3,
       14.1
      ],
      "BAC": [
       11.5,
       11.6,
       11.4,
       11.2,
       11.2
      ],
      "WFC": [
       11.1,
       11,
       10.6,
       10.3,
       10.3
      ]
     },
     "fuente": "suplementos financieros y 10-Q. 2T26: estimación preliminar de cada banco."
    }
   ],
   "temas": [
    {
     "titulo": "Mercados de capitales: el motor del trimestre, con dudas sobre su continuidad",
     "parrafos": [
      "El salto del beneficio procede sobre todo de las comisiones y de la actividad de mercados. El patrón se repite en las tres entidades: FICC crece a un dígito medio y **la renta variable crece entre un 64% y un 86%**, impulsada por grandes salidas a bolsa, rebalanceos de índices y actividad en Asia. Es un entorno de apetito por el riesgo muy elevado, que JPM describe como un mercado *extremadamente risk on*.",
      "La calidad de este crecimiento es menor que la del margen de intereses. JPM reconoce un adelanto de operaciones de ECM y M&A, y en septiembre BofA espera comisiones de banca de inversión de 1,6–1,8 B$ en el 3T, por debajo de los 2,0 B$ del 3T25. Parte del beneficio del trimestre, además, no es recurrente: JPM incluye 4,6 B$ por la venta de acciones de Visa y Wells Fargo 847 M$ de plusvalías de capital riesgo."
     ],
     "evidencias": [
      {
       "e": "JPM",
       "t": "Markets 12,1 B$ (+35%); renta variable 6,0 B$ (+86%); comisiones de banca de inversión de CIB +30%. Número uno en comisiones globales, con una cuota del 9,3%."
      },
      {
       "e": "BAC",
       "t": "Sales & trading 7,2 B$ sin DVA (+33%). FICC registra su mejor trimestre en más de una década y renta variable marca récord (3,6 B$)."
      },
      {
       "e": "WFC",
       "t": "Comisiones de banca de inversión récord (939 M$, +35%). La entidad sube del 9.º al 4.º puesto en M&A y crece con fuerza en financiación de mercados."
      }
     ]
    },
    {
     "titulo": "Crédito: el consumidor mejora y la atención se desplaza al crédito mayorista y no bancario",
     "parrafos": [
      "Los datos de crédito al consumo son mejores que en el 1T. Bajan los fallidos en tarjetas en los tres bancos y también la morosidad a 30 días (JPM 1,91%, BofA 2,23%, Wells 2,58%). Las dotaciones netas a reservas son testimoniales, y BofA libera 46 M$. En oficinas, la exposición problemática sigue reduciéndose: BofA apenas registra fallidos (2 M$) y Wells libera reservas.",
      "La cautela de los equipos directivos ya no se centra en el consumidor, sino en el crecimiento del crédito a entidades financieras no bancarias y en la financiación de la infraestructura de IA. Dimon habla de una relajación leve de estándares, con más PIK y covenants más débiles; Scharf distingue entre un consumidor sano y un segmento mayorista con *un rango de riesgo muy amplio*. No hay deterioro en las cifras, pero el riesgo **se acumula en la parte del balance que más crece**."
     ],
     "evidencias": [
      {
       "e": "JPM",
       "t": "NCO de Card Services 3,34% (3,47% en el 1T); previsión de fallidos en tarjetas para 2026 rebajada del ~3,4% al ~3,2%. La exposición inmobiliaria criticada sube a 12,2 B$ (+571 M$ desde diciembre)."
      },
      {
       "e": "BAC",
       "t": "NCO comerciales +22 M$ trimestral por pérdidas corporativas que la dirección califica de aisladas. La exposición a gestoras y fondos alcanza 158,7 B$, frente a 133,2 B$ hace un año."
      },
      {
       "e": "WFC",
       "t": "NCO total 0,34% (0,45% en el 1T); activos dudosos −824 M$. Los préstamos a entidades financieras no bancarias suben a 208,8 B$, desde 157,1 B$ hace un año."
      }
     ]
    },
    {
     "titulo": "NII: crece por depósitos y préstamos, no por margen",
     "parrafos": [
      "El margen de intereses sigue creciendo en dólares, pero su composición cambia. En JPM y Wells Fargo el NIM retrocede y el avance procede de volúmenes: depósitos mayoristas mejores de lo esperado en JPM y préstamos +12% en Wells. BofA es la excepción: su net interest yield sube hasta 2,08% por la repreciación de activos a tipo fijo, y la entidad mantiene su objetivo del 2,30%.",
      "Las guías mejoran pese a ello. JPM eleva el NII sin Markets a ~96,5 B$ y atribuye la subida, sobre todo, a los saldos de depósitos. BofA apunta a un crecimiento cercano al 8% en 2026. Wells mantiene ~50 B$ y, en septiembre, reduce la compresión esperada del 3T a entre 0 y −1 pb. El riesgo que señala JPM es la búsqueda de rentabilidad por parte de los depositantes, que podría encarecer la financiación si los tipos siguen subiendo."
     ],
     "evidencias": [
      {
       "e": "JPM",
       "t": "NII sin Markets 23,7 B$ (+4% interanual); rendimiento sin Markets de 3,65% (3,72% en el 1T)."
      },
      {
       "e": "BAC",
       "t": "NII FTE 16,2 B$ (+9%); tipo pagado por depósitos de 1,46%, a la baja por mix y no por remuneración."
      },
      {
       "e": "WFC",
       "t": "Coste de los depósitos al alza (1,51% frente a 1,43%) por el desplazamiento hacia depósitos remunerados."
      }
     ]
    },
    {
     "titulo": "Capital: el crecimiento del balance empieza a ser el factor limitante",
     "parrafos": [
      "La demanda de crédito es amplia: préstamos comerciales y financiación de mercados, con un peso creciente de la inversión en centros de datos. Dimon cifra el capex en IA en unos 700.000 M$ este año y algo más de 1 billón el próximo. Ese crecimiento consume activos ponderados por riesgo: los de JPM suben unos 103.000 M$ en el trimestre y los de Wells un 9% interanual.",
      "El resultado es un **CET1 a la baja** en JPM y en Wells desde hace cuatro trimestres, y recompras más selectivas. La revisión de Basilea III y del recargo G-SIB es relevante para el sector: Wells estima una reducción de sus activos ponderados de ~7%, pero no espera normas definitivas antes de final de año."
     ],
     "evidencias": [
      {
       "e": "JPM",
       "t": "Recompras netas de 6,2 B$. Dimon evita comprometer un importe: prefiere recomprar más cuando la cotización baja."
      },
      {
       "e": "BAC",
       "t": "Distribuye 8,0 B$ (6,0 B$ en recompras) con el CET1 estable en 11,2%. En septiembre asegura no sentir presión para acumular capital."
      },
      {
       "e": "WFC",
       "t": "Recompra 3,0 B$ (~4 B$ en el 1T) y sitúa el CET1 en la parte baja de su rango objetivo, del 10–10,5%."
      }
     ]
    },
    {
     "titulo": "Consumidor: gasto sólido y sin bifurcación visible en los datos de los bancos",
     "parrafos": [
      "El gasto con tarjeta crece entre un 8% y un 12% interanual en los tres bancos, y los equipos directivos describen un consumidor que gasta, ahorra y paga sus deudas. JPM y Wells afirman explícitamente que sus datos por cohortes de renta no muestran la divergencia en forma de K que se destacaba en el 1T. Es un matiz importante respecto de la lectura anterior.",
      "Las señales de presión son todavía marginales, pero existen. JPM vigila a los hogares con salario real negativo y, en septiembre, detecta debilidad en empresas expuestas a las rentas más bajas. BofA observa que la gasolina sube un 15–20% en el gasto con tarjeta y que la preocupación dominante es la asequibilidad."
     ],
     "evidencias": [
      {
       "e": "JPM",
       "t": "Volumen de tarjetas +10% interanual; más de 500.000 cuentas corrientes netas nuevas en el trimestre."
      },
      {
       "e": "BAC",
       "t": "Gasto de clientes a un ritmo de +6% o más en el 2T, que se modera a +4% en agosto."
      },
      {
       "e": "WFC",
       "t": "Crédito +12% y débito +8%. Morosidad inferior a la modelizada “cada mes”, según el CFO."
      }
     ]
    }
   ],
   "citas": [
    {
     "texto": "It’s getting close to as good as it gets. We just don’t know how long it’s going to last.",
     "quien": "Jamie Dimon, CEO",
     "contexto": "JPMorgan, call del 2T26"
    },
    {
     "texto": "The U.S. economy has proved more durable than expected.",
     "quien": "Brian Moynihan, CEO",
     "contexto": "Bank of America, call del 2T26"
    },
    {
     "texto": "Often, when times like this continue, leverage and risks develop that are sometimes hard to see.",
     "quien": "Charlie Scharf, CEO",
     "contexto": "Wells Fargo, call del 2T26"
    }
   ],
   "pulso": {
    "etiqueta": "Después del trimestre · conferencias del 14 y 15 de septiembre",
    "titulo": "El 3T empieza con divergencias en banca de inversión y un entorno de tipos y petróleo más exigente",
    "parrafos": [
     "Las intervenciones de mitad de trimestre no alteran la tesis del 2T, pero introducen matices. En banca de inversión, JPM y BofA muestran lecturas opuestas del mismo mercado: JPM espera crecimientos interanuales en la franja media-alta de los dos dígitos (≈15–19%), mientras que BofA calcula que el conjunto del mercado cae en torno a un 10% y que sus comisiones retrocederán algo más. El crédito sigue sin mostrar grietas: Wells Fargo dice buscarlas activamente sin encontrarlas.",
     "El contexto macro es más exigente que en julio. Petno (JPM) resume el momento en que, pese a la guerra y un petróleo por encima de 100 dólares, *nada parpadea en rojo*. BofA y los analistas dan por hecha una subida de tipos de la Fed en septiembre, con el bono a 10 años por encima del 5%. Es una combinación que favorece el margen a corto plazo, pero que tensiona la asequibilidad de los hogares."
    ],
    "bullets": [
     {
      "e": "JPM",
      "t": "Comisiones de banca de inversión e ingresos de Markets del 3T: crecimiento interanual “mid- to high teens” (≈15–19%). La actividad de M&A está *en máximos desde hace tiempo*."
     },
     {
      "e": "BAC",
      "t": "Banca de inversión de 1,6–1,8 B$ frente a 2,0 B$ en el 3T25; trading plano. El objetivo de apalancamiento operativo vuelve a 200–300 pb, desde 300–400 pb. Guía de NII sin cambios (+7/8%)."
     },
     {
      "e": "WFC",
      "t": "NIM del 3T entre −1 pb y plano (antes se esperaban −3/−4 pb). Banca de inversión y mercados, a un dígito medio. Guías de NII y gastos sin cambios."
     }
    ]
   },
   "macroIntro": "La foto agregada es la de una economía que sigue creciendo con fuerza en términos nominales, con rasgos **consistentes con un ciclo avanzado**: el beneficio bancario depende más que antes de mercados y comisiones, sus partidas más cíclicas, y el riesgo crece donde menos se ve.",
   "macro": [
    {
     "tema": "Consumo",
     "texto": "Gasto con tarjeta +8% a +12% interanual y crédito al consumo mejor que en el 1T. El empleo sostiene la capacidad de pago; la presión en rentas bajas es, por ahora, marginal (asequibilidad, gasolina).",
     "vs": "Frente al 1T: mejora. La bifurcación por renta no aparece en los datos de los bancos."
    },
    {
     "tema": "Crédito",
     "texto": "Sin deterioro en las cifras. El crecimiento se concentra en entidades no bancarias e infraestructura de IA, con estándares que se relajan en los márgenes (PIK, covenants). Los propios consejeros delegados advierten de riesgos difíciles de ver.",
     "vs": "Frente al 1T: el foco de riesgo se desplaza del consumidor al crédito mayorista."
    },
    {
     "tema": "Inversión empresarial",
     "texto": "La demanda de crédito comercial es amplia y el capex en IA tira de la financiación (Dimon: ~700.000 M$ este año y más de 1 billón el próximo). Las señales sobre la empresa mediana son mixtas: Wells la ve cauta; BofA, usando más sus líneas de crédito en septiembre.",
     "vs": "Frente al 1T: más visible y más concentrada en IA."
    },
    {
     "tema": "Mercados y condiciones financieras",
     "texto": "Apetito por el riesgo muy elevado: renta variable, salidas a bolsa y M&A en máximos. Desde septiembre, tipos al alza (subida de la Fed descontada, bono a 10 años por encima del 5%) y petróleo por encima de 100$ endurecen el entorno.",
     "vs": "Frente al 1T: mercados más laxos, tipos más exigentes."
    }
   ],
   "vigilar": [
    "Si la mejora del crédito en tarjetas se mantiene con tipos y gasolina al alza, o si el 2T marca el mínimo.",
    "Divergencia en banca de inversión entre JPM y BofA en el 3T: ¿cuota de mercado o ciclo?",
    "Coste de los depósitos tras la subida de la Fed: si aumenta la búsqueda de rentabilidad por los depositantes.",
    "Crecimiento y calidad del crédito a entidades no bancarias, crédito privado y centros de datos.",
    "Evolución del CET1 y del ritmo de recompras hasta la aprobación de Basilea III.",
    "Desaceleración del gasto con tarjeta (BofA: +4% en agosto frente a más del 6% en el 2T)."
   ],
   "proximo": "Próximos resultados: 3T 2026, previstos a mediados de octubre.",
   "cobertura": [
    {
     "empresa": "JPMorgan Chase",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "14-jul-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/19617/000162828026048078/a2q26erfexhibit991narrative.htm"
      },
      {
       "t": "Suplemento",
       "url": "https://www.sec.gov/Archives/edgar/data/19617/000162828026048078/a2q26erfex992supplement.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/19617/000162828026054343/jpm-20260630.htm"
      },
      {
       "t": "Call 14-jul y conferencia 15-sep"
      }
     ]
    },
    {
     "empresa": "Bank of America",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "14-jul-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/70858/000007085826000353/bac06302026ex991.htm"
      },
      {
       "t": "Suplemento",
       "url": "https://www.sec.gov/Archives/edgar/data/70858/000007085826000353/bac-06302026ex993.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/70858/000007085826000394/bac-20260630.htm"
      },
      {
       "t": "Call 14-jul y conferencia 14-sep"
      }
     ]
    },
    {
     "empresa": "Wells Fargo",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "14-jul-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/72971/000007297126000288/wfc2qer07-14x26ex991xrelea.htm"
      },
      {
       "t": "Suplemento",
       "url": "https://www.sec.gov/Archives/edgar/data/72971/000007297126000288/wfc2qer07-14x26ex992xsuppl.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/72971/000007297126000302/wfc-20260630.htm"
      },
      {
       "t": "Call 14-jul y conferencia 15-sep"
      }
     ]
    }
   ],
   "metodo": "Trimestre natural: cada compañía se asigna al trimestre natural con el que comparte más días de su periodo fiscal. En bancos, periodo fiscal y natural coinciden. Cifras según las publican las compañías; no se calculan variaciones que no estén reportadas. Las conferencias de septiembre se refieren al 3T en curso y se presentan por separado.",
   "glosario": [
    {
     "t": "NII",
     "d": "Ingreso neto por intereses: lo que el banco cobra por préstamos e inversiones menos lo que paga por depósitos y financiación."
    },
    {
     "t": "NIM",
     "d": "Margen de intereses sobre activos rentables. BofA publica el equivalente como net interest yield."
    },
    {
     "t": "NCO",
     "d": "Fallidos netos: préstamos dados por perdidos, descontadas las recuperaciones, en % de la cartera."
    },
    {
     "t": "CET1",
     "d": "Capital de máxima calidad sobre activos ponderados por riesgo; determina la capacidad de crecer y de remunerar al accionista."
    },
    {
     "t": "RWA",
     "d": "Activos ponderados por riesgo: el denominador de los ratios de capital."
    },
    {
     "t": "NBFI",
     "d": "Entidades financieras no bancarias (gestoras, fondos, crédito privado) a las que prestan los bancos."
    },
    {
     "t": "ROTCE",
     "d": "Rentabilidad sobre el capital tangible ordinario."
    },
    {
     "t": "Markets",
     "d": "Ingresos por intermediación en renta fija, divisas, materias primas (FICC) y renta variable."
    }
   ],
   "sector": "banks",
   "trimestre": "2026-2T",
   "tarjeta": "Mercados de capitales y un crédito mejor de lo previsto llevan el beneficio a máximos; el margen ya no acompaña"
  }
 ],
 "cards": [
  {
   "sector": "cards",
   "trimestre": "2026-2T",
   "sectorNombre": "Tarjetas / Pagos",
   "label": "2T 2026",
   "labelAnterior": "1T 2026",
   "meses": "abr–jun 2026",
   "publicado": "18-sep-2026",
   "empresas": [
    {
     "id": "AXP",
     "nombre": "American Express"
    },
    {
     "id": "COF",
     "nombre": "Capital One"
    },
    {
     "id": "MA",
     "nombre": "Mastercard"
    },
    {
     "id": "V",
     "nombre": "Visa"
    }
   ],
   "titulo": "El gasto con tarjeta acelera en EE.UU. y el crédito mejora; gasolina, promociones y Mundial explican parte del impulso, y las redes crecen más por precio y servicios que por volumen",
   "tarjeta": "El gasto con tarjeta acelera en EE.UU. y el crédito mejora, con ayuda puntual de gasolina, promociones y Mundial",
   "drivers": "volumen de gasto y transacciones · EE.UU. frente a internacional · cross-border y viajes · crédito (NCO y morosidad) · precio, incentivos y servicios · rentas altas frente a masivas",
   "pregunta": {
    "q": "¿Han frenado la geopolítica y la energía el gasto con tarjeta, como apuntaba el cross-border en abril?",
    "a": "No en los totales. El volumen de pagos de Visa en EE.UU. acelera al +10% (unos 2 puntos más que en el trimestre anterior), el cross-border sin intra-Europa sube un 12% y Mastercard reconoce que el impacto de Oriente Medio fue *less severe than we anticipated*. La energía actúa, de hecho, como impulso nominal: la gasolina encarece el ticket y suma volumen, de modo que parte de la aceleración es precio y no actividad real."
   },
   "takeaways": [
    {
     "lead": "El gasto en EE.UU. acelera en los cuatro nombres.",
     "texto": "Visa sube al +10% en EE.UU. (crédito +11%, débito +9%), su mejor ritmo desde el ejercicio 2019 sin la recuperación poscovid; Mastercard, +10% en volumen conmutado homogéneo (+2 pp frente al 1T); USCS de American Express, +11%, máximo desde el 1T18 sin la pandemia; Capital One *legacy*, ~+14% con Brex."
    },
    {
     "lead": "Parte del impulso es puntual.",
     "texto": "Las compañías citan la gasolina más cara, devoluciones fiscales mayores, el adelanto a junio de grandes promociones del retail y el Mundial (11–30 de junio). Visa ya ve un escalón menos en julio (+9% en EE.UU.) y American Express cifra en +8% su billed business de julio–agosto, frente al +9% del 2T."
    },
    {
     "lead": "El crédito mejora en lugar de normalizarse.",
     "texto": "La tasa de NCO de Domestic Card de Capital One baja al 4,71% (5,10% en el 1T; 5,25% un año antes) y su morosidad al 3,39%; en American Express la morosidad a 30 días cae al 1,2% con fallidos estables en el 2,0%. Ambos liberan reservas: $662M Capital One y ~$190M American Express."
    },
    {
     "lead": "El cross-border resiste gracias al e-commerce, no a los viajes.",
     "texto": "Visa crece un 12% sin intra-Europa, con e-commerce +16% y viajes +10%; Mastercard, un 12% en moneda local (+15% un año antes), con card-not-present sin viajes +20% impulsado por Venezuela y el calendario de promociones. El viaje cross-border de Mastercard baja frente al 1T, aunque mejora respecto de abril."
    },
    {
     "lead": "Las redes monetizan más que el volumen.",
     "texto": "Los ingresos crecen un 12–13% a tipo constante en Mastercard y Visa, frente a volúmenes del 8–10%, apoyados en precio y en servicios de valor añadido (VAS +18% y +34% a tipo constante). A la vez, suben los incentivos a clientes (+22% en rebates de Mastercard; +18% en Visa), señal de competencia intensa por los contratos."
    }
   ],
   "cambios": [
    {
     "kpi": "Gasto en EE.UU.",
     "dir": "Acelera",
     "texto": "Visa pasa de +8% (nominal, trimestre anterior) a +10%; USCS de American Express, de +10% a +11%; Mastercard, +2 pp en volumen conmutado homogéneo. Management lo atribuye en parte a gasolina, devoluciones fiscales, promociones y Mundial."
    },
    {
     "kpi": "Crédito de tarjeta",
     "dir": "Mejora",
     "texto": "Capital One: NCO de Domestic Card del 5,10% al 4,71% y morosidad del 3,70% al 3,39%. American Express: morosidad a 30 días del 1,3% al 1,2%, fallidos planos en el 2,0% y reserva sobre saldos del 2,8% al 2,7%."
    },
    {
     "kpi": "Cross-border",
     "dir": "Se mantiene",
     "texto": "Mastercard, del +13% del 1T (según el informe anterior) al +12% en moneda local; Visa sin intra-Europa, +12%, más de 1 punto por encima del trimestre anterior. El e-commerce gana peso frente a los viajes."
    },
    {
     "kpi": "Viajes y Oriente Medio",
     "dir": "Mejor de lo temido",
     "texto": "En abril Mastercard daba un cross-border de viajes del +2% en lo que iba de mes (informe anterior); al cierre, el impacto de Oriente Medio se moderó y fue menor de lo previsto. Aerolíneas +10% en American Express, máximo de seis trimestres."
    },
    {
     "kpi": "Servicios de valor añadido",
     "dir": "Diverge",
     "texto": "Visa acelera de +27% (1T, informe anterior) a +33% nominal, con marketing ligado al Mundial y la compra de Prisma; Mastercard modera de +22% a +20% (+18% a tipo constante)."
    },
    {
     "kpi": "Guías anuales",
     "dir": "Al alza",
     "texto": "American Express eleva la de ingresos al 10% (BPA sin cambios); Mastercard espera quedar en la parte alta del rango de *low double-digit*; Visa revisa las de ingresos y BPA con un *now* cuyo punto de partida no figura en los documentos."
    }
   ],
   "seguimiento": [
    {
     "kpi": "Gasto frente a transacciones o ticket",
     "dir": "Alineado, con algo de precio",
     "texto": "Transacciones procesadas de Visa +10%, igual que el volumen; conmutadas de Mastercard +9% frente a un GDV del +8%. Pero Mastercard reconoce el viento de cola de la gasolina, que es ticket y no actividad."
    },
    {
     "kpi": "Travel y cross-border tras Oriente Medio",
     "dir": "Resiste",
     "texto": "Viajes cross-border de Visa +10%, igual que en el trimestre anterior; en Mastercard caen frente al 1T pero mejoran frente a abril. American Express ve algo de impacto por Oriente Medio, sin *general slowdown*."
    },
    {
     "kpi": "Morosidad y NCO en Capital One y American Express",
     "dir": "Mejora",
     "texto": "Bajan en Capital One (NCO 4,71%, morosidad 3,39%); American Express mantiene la morosidad en 1,2–1,3% desde hace más de tres años. Matiz: en Capital One, junio fue el primer mes de 2026 en que la morosidad solo igualó la estacionalidad."
    },
    {
     "kpi": "Premium frente a masivo",
     "dir": "Sin bifurcación visible",
     "texto": "Visa no ve debilidad en los tramos de menor gasto, aunque el alto crece más; Mastercard ve aguantar masivo y acomodado; Capital One no ve una economía en *K* en sus datos, aunque no opera en el tramo más bajo."
    },
    {
     "kpi": "VAS frente a volumen de red",
     "dir": "Se amplía la brecha",
     "texto": "VAS de Visa +33% nominal y de Mastercard +20%, frente a volúmenes del 8–10%. Los VAS suponen ya el 41,2% de los ingresos de Mastercard (calculado)."
    },
    {
     "kpi": "Visa Direct, B2B y tarjetas comerciales",
     "dir": "Mixto",
     "texto": "Visa Direct +21% en transacciones (+23% en el 1T, según el informe anterior) y volumen comercial de Visa +13%; Mastercard, +12%. Commercial Services de American Express crece solo un 5%, con el middle market presionado por fintechs."
    },
    {
     "kpi": "IA y comercio agéntico",
     "dir": "Pasa a la cuenta de resultados",
     "texto": "Visa registra $563M de indemnizaciones al reorganizar equipos en *agentic squads* de 2–4 personas; Mastercard lanza Agent Pay for machines con más de 30 socios; American Express se declara *en pretemporada*."
    }
   ],
   "scorecard": [
    {
     "titulo": "Resultados",
     "filas": [
      {
       "kpi": "Ingresos netos",
       "nota": "variación interanual",
       "v": {
        "AXP": {
         "v": "$19,6B · +10%",
         "c": "FX-adj. +10%; 1T26: $18,9B"
        },
        "COF": {
         "v": "$15,9B · +4% vs 1T",
         "c": "+27% interanual, no homogéneo (Discover)"
        },
        "MA": {
         "v": "$9,3B · +14%",
         "c": "+12% a tipo constante"
        },
        "V": {
         "v": "$11,6B · +14%",
         "c": "+13% a tipo constante; Prisma aporta <1,5 pp"
        }
       }
      },
      {
       "kpi": "BPA",
       "nota": "ajustado si se publica",
       "v": {
        "AXP": {
         "v": "$4,53 · +11%",
         "c": "GAAP; no publica ajustado"
        },
        "COF": {
         "v": "$5,81 ajustado",
         "c": "1T26: $4,42; GAAP $4,73"
        },
        "MA": {
         "v": "$5,04 · +21%",
         "c": "GAAP $4,97, +22%"
        },
        "V": {
         "v": "$3,32 · +11%",
         "c": "GAAP $2,97, +10%"
        }
       }
      },
      {
       "kpi": "Margen / eficiencia",
       "v": {
        "AXP": {
         "v": "VCE 44,6% de ingresos",
         "c": "Calculado; guía 2026: 44–45%"
        },
        "COF": {
         "v": "Eficiencia ajustada 51,38%",
         "c": "1T26: 49,71%"
        },
        "MA": {
         "v": "Margen op. ajustado 61,1%",
         "c": "2T25: 59,9%; GAAP 60,2%"
        },
        "V": {
         "v": "Margen op. non-GAAP 66,7%",
         "c": "Calculado; 2T25: 67,5% (calculado)"
        }
       }
      },
      {
       "kpi": "Rentabilidad",
       "v": {
        "AXP": {
         "v": "ROE 36,4%",
         "c": "1T26: 35,2%"
        },
        "COF": {
         "v": "ROTCE 18,04%",
         "c": "1T26: 12,20%"
        },
        "MA": {
         "v": "N/D",
         "c": "No publica ROE"
        },
        "V": {
         "v": "N/D",
         "c": "No publica ROE"
        }
       }
      },
      {
       "kpi": "Guía anual",
       "v": {
        "AXP": {
         "v": "Ingresos ~10% (elevada)",
         "c": "BPA $17,30–17,90, sin cambios"
        },
        "COF": {
         "v": "Sin guía numérica",
         "c": "Repunte del NIM esperado en el 3T"
        },
        "MA": {
         "v": "Parte alta de low double-digit",
         "c": "Ingresos; mejora dentro del rango"
        },
        "V": {
         "v": "Parte baja de low teens",
         "c": "Ingresos FY26; BPA, parte baja de mid-teens"
        }
       }
      }
     ]
    },
    {
     "titulo": "Indicadores sectoriales",
     "filas": [
      {
       "kpi": "Volumen de pagos",
       "nota": "billed business · compras · GDV · payments volume",
       "v": {
        "AXP": {
         "v": "$455,8B · +9%",
         "c": "FX-adj. +9% (9,4% según el CFO); 1T26: +9%"
        },
        "COF": {
         "v": "$253,8B · +15% vs 1T",
         "c": "+26% interanual, no homogéneo; legacy ~+14% con Brex"
        },
        "MA": {
         "v": "$2,88T · +8%",
         "c": "Moneda local; +9% en USD; 2T25: +9%"
        },
        "V": {
         "v": "Más de $4T · +10%",
         "c": "Dólar constante; nominal +11%"
        }
       }
      },
      {
       "kpi": "EE.UU.",
       "v": {
        "AXP": {
         "v": "USCS $196,4B · +11%",
         "c": "1T26: +10%"
        },
        "COF": {
         "v": "Domestic Card $249,2B",
         "c": "+15% vs 1T; Discover legacy algo menos de +2%"
        },
        "MA": {
         "v": "GDV $858B · +5,5%",
         "c": "Crédito +9,5%; débito +1,3% (+8% sin Capital One)"
        },
        "V": {
         "v": "+10%",
         "c": "Crédito +11%, débito +9%; unos 2 puntos más que en el 1T"
        }
       }
      },
      {
       "kpi": "Cross-border / internacional",
       "v": {
        "AXP": {
         "v": "ICS $117,2B · +13%",
         "c": "Tarjetas emitidas fuera de EE.UU.; FX-adj. +12%"
        },
        "COF": {
         "v": "N/D",
         "c": "Negocio esencialmente doméstico"
        },
        "MA": {
         "v": "+12% local",
         "c": "+14% en USD; 2T25: +15%"
        },
        "V": {
         "v": "+12% sin intra-Europa",
         "c": "Total +13%; e-commerce +16%"
        }
       }
      },
      {
       "kpi": "Viajes",
       "v": {
        "AXP": {
         "v": "T&E +10%",
         "c": "1T26: +9%; aerolíneas +10%"
        },
        "COF": {
         "v": "N/D",
         "c": "No publica"
        },
        "MA": {
         "v": "Cross-border de viajes, a la baja vs 1T",
         "c": "Mejor que abril; sin cifra"
        },
        "V": {
         "v": "Cross-border de viajes +10%",
         "c": "Igual que en el 1T; sin intra-Europa"
        }
       }
      },
      {
       "kpi": "Transacciones",
       "v": {
        "AXP": {
         "v": "N/D",
         "c": "Tarjetas en circulación 155,1 M, +4%"
        },
        "COF": {
         "v": "N/D",
         "c": "Red Discover: $189,6B, +9% vs 1T"
        },
        "MA": {
         "v": "Conmutadas +9%",
         "c": "2T25: +10%; compras 57.096 M, +9,2%"
        },
        "V": {
         "v": "71.662 M · +10%",
         "c": "Procesadas; Visa Direct +21%"
        }
       }
      },
      {
       "kpi": "NCO tarjeta",
       "v": {
        "AXP": {
         "v": "2,0%",
         "c": "Principal, consumo y pyme; 1T26: 2,0%"
        },
        "COF": {
         "v": "4,71%",
         "c": "Domestic Card; 1T26: 5,10%; 2T25: 5,25%"
        },
        "MA": {
         "v": "N/D",
         "c": "Sin riesgo de crédito"
        },
        "V": {
         "v": "N/D",
         "c": "Sin riesgo de crédito"
        }
       }
      },
      {
       "kpi": "Morosidad 30+ días",
       "v": {
        "AXP": {
         "v": "1,2%",
         "c": "Consumo y pyme; 1T26: 1,3%"
        },
        "COF": {
         "v": "3,39%",
         "c": "Domestic Card; 1T26: 3,70%"
        },
        "MA": {
         "v": "N/D",
         "c": "Sin riesgo de crédito"
        },
        "V": {
         "v": "N/D",
         "c": "Sin riesgo de crédito"
        }
       }
      },
      {
       "kpi": "Comisiones y servicios",
       "v": {
        "AXP": {
         "v": "Net card fees +15%",
         "c": "$2,9B; guía: high teens al cierre del año"
        },
        "COF": {
         "v": "Descuento e intercambio +15% vs 1T",
         "c": "$2,3B; +53% interanual, no homogéneo"
        },
        "MA": {
         "v": "VAS $3,8B · +20%",
         "c": "+18% a tipo constante"
        },
        "V": {
         "v": "VAS $3,8B · +33%",
         "c": "+34% a tipo constante"
        }
       }
      }
     ]
    }
   ],
   "scorecardNota": "B = miles de millones; T = billones. Variaciones según las publica cada compañía. Visa = 3T fiscal de 2026 (abr–jun). Capital One: las variaciones interanuales no son homogéneas porque el 2T25 solo incluye unas seis semanas de Discover (cerrada el 18-may-2025) y su dotación inicial de reservas; se prioriza la comparación con el 1T. Las métricas de volumen no se definen igual (billed business, volumen de compras, GDV, payments volume) y Visa y Mastercard publican crecimientos a tipo constante o en moneda local. Mastercard incluye desde 2026 el cross-border de Venezuela.",
   "companias": [
    {
     "e": "AXP",
     "nombre": "American Express",
     "titular": "El gasto premium, en su mejor ritmo en tres años",
     "texto": "Billed business +9% FX-adj. con USCS +11%, impulsado por la renovación de la Platinum, y crédito estable o mejor. Eleva la guía de ingresos al 10% pero no la de BPA: reinvierte en recompensas, marketing, tecnología y TheFork. El beneficio neto (+8%) crece menos que el antes de impuestos (+15%) por beneficios fiscales puntuales en el 2T25."
    },
    {
     "e": "COF",
     "nombre": "Capital One",
     "titular": "Crédito mejor, con el brownout de Discover como lastre",
     "texto": "NCO de Domestic Card del 4,71% y liberación de reservas de $662M; BPA ajustado de $5,81, tras excluir $1,08 de amortizaciones e integración de Discover y Brex. El volumen *legacy* crece ~+14% con Brex; los préstamos de tarjeta Discover caen un 1,5%. CET1 del 13,7%."
    },
    {
     "e": "MA",
     "nombre": "Mastercard",
     "titular": "Guía en la parte alta del rango tras un trimestre mejor de lo previsto",
     "texto": "Ingresos +12% a tipo constante con GDV +8%. Atribuye la sorpresa a un Oriente Medio menos dañino, al cross-border desde Venezuela y a los VAS. Europa se desacelera por la comparativa y la salida voluntaria de volumen (Lloyds). Litigios: $82M."
    },
    {
     "e": "V",
     "nombre": "Visa",
     "titular": "EE.UU. al +10% y un trimestre con partidas extraordinarias",
     "texto": "Volumen de pagos por encima de $4T por primera vez. El BPA GAAP (+10%) recoge $563M de indemnizaciones y $237M de litigios por intercambio. Revisa (*now*) sus guías anuales y espera un 4T fiscal similar al 3T."
    }
   ],
   "exhibits": [
    {
     "titulo": "Los ingresos suben frente al 1T en las cuatro compañías",
     "sub": "Ingresos netos trimestrales, miles de millones de $",
     "tipo": "bar",
     "unidad": "",
     "dec": 1,
     "cero": true,
     "trimestres": [
      "2T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "AXP": [
       17.856,
       18.907,
       19.637
      ],
      "COF": [
       12.492,
       15.231,
       15.85
      ],
      "MA": [
       8.133,
       8.398,
       9.277
      ],
      "V": [
       10.172,
       11.23,
       11.633
      ]
     },
     "fuente": "notas de resultados y suplementos. Visa: trimestres fiscales equivalentes. Mastercard 1T26 calculado (semestre menos 2T). Capital One 2T25 con solo unas seis semanas de Discover."
    },
    {
     "titulo": "El gasto del cliente premium estadounidense acelera hasta su mayor ritmo desde 2018",
     "sub": "American Express, USCS: billed business, variación interanual, %",
     "tipo": "bar",
     "unidad": "%",
     "dec": 0,
     "trimestres": [
      "2T25",
      "3T25",
      "4T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "AXP": [
       7,
       9,
       9,
       10,
       11
      ]
     },
     "fuente": "suplemento estadístico de American Express. Máximo desde el 1T18 excluida la pandemia, según la compañía."
    },
    {
     "titulo": "La morosidad de tarjeta baja en los dos emisores",
     "sub": "Morosidad a 30 días o más, %. American Express: consumo y pyme; Capital One: Domestic Card",
     "tipo": "line",
     "unidad": "%",
     "dec": 2,
     "trimestres": [
      "2T25",
      "3T25",
      "4T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "AXP": [
       1.3,
       1.3,
       1.3,
       1.3,
       1.2
      ],
      "COF": [
       3.6,
       3.89,
       3.99,
       3.7,
       3.39
      ]
     },
     "fuente": "suplementos de American Express y Capital One. Carteras y definiciones no homogéneas."
    },
    {
     "titulo": "En las redes, los servicios crecen mucho más deprisa que el volumen",
     "sub": "Variación interanual en el 2T26, %, a tipo constante o moneda local",
     "tipo": "bar",
     "unidad": "%",
     "dec": 0,
     "trimestres": [
      "Volumen",
      "Cross-border",
      "Transacciones",
      "VAS"
     ],
     "series": {
      "MA": [
       8,
       12,
       9,
       18
      ],
      "V": [
       10,
       13,
       10,
       34
      ]
     },
     "fuente": "notas de resultados y calls. Mastercard: GDV y transacciones conmutadas; Visa: payments volume, cross-border total y transacciones procesadas."
    }
   ],
   "temas": [
    {
     "titulo": "Consumo: la aceleración es real, pero no toda es volumen",
     "parrafos": [
      "Las cuatro compañías describen un gasto sólido, amplio por categorías y tramos de renta, y más fuerte que en el 1T. Visa habla de fortaleza *generalizada* (crédito y débito, discrecional y no discrecional, con y sin tarjeta presente); Capital One ve crecer el gasto tanto por nuevas cuentas como por gasto por cliente.",
      "Obligan a la prudencia las causas que enumeran las propias compañías: gasolina más cara, devoluciones fiscales mayores, promociones del retail adelantadas de julio a junio y el Mundial. Inflan el volumen nominal o lo concentran en el trimestre. El dato **es consistente con un consumo firme en términos nominales, sin que pueda deducirse la misma aceleración en términos reales**, y las cifras de julio–agosto apuntan a una normalización, no a un frenazo."
     ],
     "evidencias": [
      {
       "e": "V",
       "t": "EE.UU. +10%, el ritmo más alto desde el ejercicio 2019 sin la recuperación poscovid; aceleran las compras presenciales y las remotas."
      },
      {
       "e": "MA",
       "t": "Volumen conmutado de EE.UU. sin el débito de Capital One +10%, 2 pp más que en el 1T, con viento de cola de la gasolina."
      },
      {
       "e": "AXP",
       "t": "Retail +13% FX-adj. y reservas de Amex Travel +22%; el gasto en gasolina sube de forma *significativa*, pero pesa ~2% del billed business."
      }
     ]
    },
    {
     "titulo": "Crédito: los emisores reducen colchones pese a un contexto más incierto",
     "parrafos": [
      "Los datos de crédito mejoran frente al 1T: en Capital One la tasa de NCO de Domestic Card baja 39 pb, hasta el 4,71%, y la morosidad 31 pb, hasta el 3,39%; en American Express la morosidad a 30 días cede al 1,2% con fallidos en el 2,0%. Ambos liberan reservas, y Capital One reduce el peso asignado a la incertidumbre económica en sus modelos.",
      "Hay matices. Las recuperaciones ayudan a la tasa de pérdidas de Capital One y la compañía espera que ese apoyo *se reduzca un poco* el próximo año; American Express endurece su escenario adverso de PIB (hasta −4% en el 4T26) aunque baja reservas por menor morosidad. La lectura es la de **un crédito al consumo en buen nivel que podría estar estabilizándose**, no la de un nuevo deterioro. Los bancos muestran lo mismo: fallidos en tarjetas a la baja en JPM, BofA y Wells Fargo (informe de Bancos 2T26)."
     ],
     "evidencias": [
      {
       "e": "COF",
       "t": "Liberación de $662M ($705M en Domestic Card). En auto dota reservas y la originación con FICO ≤620 sube al 32% (29% un año antes)."
      },
      {
       "e": "AXP",
       "t": "Liberación de ~$190M frente a una dotación de $198M un año antes; reserva sobre saldos del 2,7%, por debajo del 2,9% de finales de 2019."
      }
     ]
    },
    {
     "titulo": "Cross-border: el e-commerce sostiene la cifra mientras los viajes se recuperan",
     "parrafos": [
      "El cross-border crece un 12% en ambas redes, pero cambia su composición. En Visa, el e-commerce transfronterizo sube un 16% y los viajes un 10%; en Mastercard, el card-not-present sin viajes crece un 20% y los viajes caen frente al 1T. Detrás del e-commerce hay factores poco extrapolables: más dólares disponibles en Venezuela, canalizados a compras remotas con débito, y el calendario de promociones. Visa espera que el e-commerce cross-border *settle back down*.",
      "En viajes, el golpe de Oriente Medio fue menor de lo previsto: la salida desde el Golfo se recupera con la capacidad aérea, el inbound a EE.UU. mejora y el Mundial dispara el gasto presencial de visitantes en las sedes (casi +25%, según Visa). **La geopolítica parece redistribuir rutas más que reducir el gasto de viaje**."
     ],
     "evidencias": [
      {
       "e": "MA",
       "t": "Cross-border +12% en moneda local frente al +15% del 2T25; los assessments cross-border crecen un 20% a tipo constante por precio y mix."
      },
      {
       "e": "V",
       "t": "Cross-border sin intra-Europa +12%; los ingresos por transacciones internacionales solo suben un 6% por la menor volatilidad cambiaria."
      },
      {
       "e": "AXP",
       "t": "Aerolíneas +10%, máximo de seis trimestres; International Card Services +12% FX-adj."
      }
     ]
    },
    {
     "titulo": "Redes: el crecimiento viene del precio y los servicios, y se paga en incentivos",
     "parrafos": [
      "Mastercard y Visa crecen en ingresos (12% y 13% a tipo constante) por encima de sus volúmenes (8% y 10%). En Mastercard, los assessments domésticos crecen 2 pp más que el GDV y los cross-border 8 pp más que su volumen, sobre todo por precio; en Visa, los ingresos de procesamiento (+17%) superan a las transacciones (+10%). Los VAS (seguridad, datos, autenticación, marketing) son la parte más dinámica.",
      "El contrapunto son los incentivos: los rebates de Mastercard suben un 22% y los de Visa un 18%, y el nuevo CFO de Mastercard admite que a veces hay que *go a little deeper* en precio para ganar contratos. Es **consistente con una competencia intensa por los emisores**. Ninguna de las cuatro traslada entera la sorpresa de ingresos al beneficio: American Express reinvierte en recompensas y marketing, y Visa registra $563M de indemnizaciones al reorganizar equipos con IA."
     ],
     "evidencias": [
      {
       "e": "MA",
       "t": "VAS $3,8B, +18% a tipo constante; alrededor de un 60% ligado a la red."
      },
      {
       "e": "V",
       "t": "VAS $3,8B, +34% a tipo constante, con marketing del Mundial, precios y Prisma."
      },
      {
       "e": "COF",
       "t": "Red Discover: $189,6B de volumen, +9% frente al 1T, tras migrar el débito de Capital One; prueba emitir crédito en ella."
      }
     ]
    }
   ],
   "citas": [
    {
     "texto": "We do not see signs of the lower spend consumer weakening in our volumes.",
     "quien": "C. Suh, CFO",
     "contexto": "Visa, call del 3T fiscal 2026"
    },
    {
     "texto": "We don't, in our own numbers, see this K-shaped economy",
     "quien": "Fairbank, CEO",
     "contexto": "Capital One, call del 2T26"
    },
    {
     "texto": "There has been a tailwind, which has come on account of higher fuel prices.",
     "quien": "Mehra, CFO saliente",
     "contexto": "Mastercard, call del 2T26"
    }
   ],
   "pulso": {
    "etiqueta": "Después del trimestre · julio, agosto y conferencias del 8 al 16 de septiembre",
    "titulo": "El gasto se modera un escalón en EE.UU. y el cross-border sigue fuerte",
    "parrafos": [
     "Los datos del 3T apuntan a una normalización tras los factores puntuales de junio. Visa sitúa el volumen de EE.UU. en +9% hasta el 21 de julio (crédito y débito +9%) y en *about 9%* hasta finales de agosto, con transacciones globales estables en torno al 10%. American Express cifra su billed business de julio–agosto en +8%, con T&E y aerolíneas especialmente fuertes, y atribuye parte de la fortaleza del 2T al calendario de promociones. Mastercard describe agosto *in line* con julio, sin dar porcentajes. Los bancos muestran un patrón parecido: BofA ve el gasto de sus clientes en +4% en agosto, frente a más del 6% en el 2T (informe de Bancos 2T26).",
     "El cross-border no se frena: Visa lo sitúa en +14% en julio (e-commerce +18%, viajes +12%) y en torno al 14% hasta agosto. Capital One describe la morosidad de agosto en línea con la estacionalidad y los fallidos, mejor."
    ],
    "bullets": [
     {
      "e": "AXP",
      "t": "Reafirma la guía de ingresos (~10%); card fees +16% en lo que va de año."
     },
     {
      "e": "COF",
      "t": "El brownout de Discover fue *mayor de lo estimado originalmente*; las sinergias de costes alcanzarán su ritmo pleno hacia mediados de 2027."
     },
     {
      "e": "MA",
      "t": "BVNK cerrada el 3 de agosto; el impacto de Oriente Medio en lo que va de año es *much less negative than we expected*. No actualiza la guía."
     },
     {
      "e": "V",
      "t": "Anuncia la compra de BioCatch; habla de *strength and stability*, con incertidumbre en confianza y asequibilidad."
     }
    ]
   },
   "macroIntro": "Las tarjetas describen un consumo **firme en términos nominales, amplio por tramos de renta y con un crédito que mejora**, pero con una parte del impulso del 2T atribuible a precios de la energía y a factores de calendario que ya se diluyen en julio y agosto.",
   "macro": [
    {
     "tema": "Consumo nominal",
     "texto": "Volumen de pagos en EE.UU. +10% (Visa) y billed business USCS +11% (American Express), con aceleración frente al 1T. Julio–agosto se modera a +8–9%.",
     "vs": "Frente al 1T: acelera en el trimestre y se normaliza después."
    },
    {
     "tema": "Renta y empleo",
     "texto": "Empleo al alza, paro bajo y poder adquisitivo real positivo, según las compañías; Capital One precisa que el salario real fue negativo en abril y mayo y ligeramente positivo en junio.",
     "vs": "Frente al 1T: sin bifurcación visible en los datos de las redes y emisores."
    },
    {
     "tema": "Crédito al consumo",
     "texto": "NCO y morosidad a la baja en los dos emisores, liberaciones de reservas y tasas de pago por encima de las prepandemia. El apoyo de las recuperaciones debería reducirse.",
     "vs": "Frente al 1T: mejora; posible estabilización a partir de junio."
    },
    {
     "tema": "Viajes y cross-border",
     "texto": "Cross-border +12% en ambas redes, liderado por el e-commerce; viajes +10% en Visa y aerolíneas +10% en American Express. Oriente Medio resta menos de lo previsto y el Mundial impulsa el inbound a EE.UU.",
     "vs": "Frente al 1T: mejor de lo que anticipaba abril; julio, +14% en Visa."
    },
    {
     "tema": "Precios y gasolina",
     "texto": "La gasolina más cara infla el volumen nominal en EE.UU. y APMEA (Mastercard), y su cambio explica en parte la moderación de julio (Visa).",
     "vs": "Frente al 1T: la energía pasa de riesgo a factor que infla el dato nominal."
    }
   ],
   "vigilar": [
    "Si el gasto en EE.UU. se estabiliza en torno al +9% o sigue desacelerando al desaparecer gasolina, promociones y Mundial.",
    "Evolución de la morosidad de tarjeta frente a la estacionalidad y menor apoyo de las recuperaciones en Capital One.",
    "Cross-border: normalización del e-commerce y de Venezuela frente a la recuperación de los viajes.",
    "Crecimiento de los incentivos a clientes frente a precio y VAS en Mastercard y Visa.",
    "Suelo del brownout de Discover (previsto hacia el 4T26) y avance de la emisión de crédito de Capital One en la red Discover.",
    "Coste variable de clientes y recompensas en American Express, y efecto de la venta de carteras cobrand desde el 4T.",
    "Traslado de la IA a plantillas y costes (Visa, American Express) y primeras cifras de comercio agéntico."
   ],
   "proximo": "Próximos resultados: 3T 2026 (4T fiscal de Visa), previstos entre mediados y finales de octubre.",
   "cobertura": [
    {
     "empresa": "American Express",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "24-jul-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/4962/000000496226000318/q226exhibit991.htm"
      },
      {
       "t": "Suplemento",
       "url": "https://www.sec.gov/Archives/edgar/data/4962/000000496226000318/q226exhibit992.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/4962/000000496226000322/axp-20260630.htm"
      },
      {
       "t": "Call 24-jul y conferencia 16-sep"
      }
     ]
    },
    {
     "empresa": "Capital One",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "21-jul-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/927628/000092762826000083/ex991q22026earningsrelease.htm"
      },
      {
       "t": "Suplemento",
       "url": "https://www.sec.gov/Archives/edgar/data/927628/000092762826000083/ex992q22026earningsrelease.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/927628/000092762826000089/cof-20260630.htm"
      },
      {
       "t": "8-K de métricas de junio; call 21-jul y conferencia 16-sep"
      }
     ]
    },
    {
     "empresa": "Mastercard",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "30-jul-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/1141391/000114139126000081/ma06302026-exx991xearnings.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/1141391/000114139126000083/ma-20260630.htm"
      },
      {
       "t": "Call 30-jul y conferencia 10-sep"
      }
     ]
    },
    {
     "empresa": "Visa",
     "fiscal": "3T fiscal 2026",
     "meses": "abr–jun",
     "publicado": "28-jul-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/1403161/000140316126000103/q32026earningsrelease.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/1403161/000140316126000104/v-20260630.htm"
      },
      {
       "t": "Call 28-jul y conferencia 8-sep"
      }
     ]
    }
   ],
   "metodo": "Trimestre natural: cada compañía se asigna al trimestre natural con el que comparte más días de su periodo fiscal. American Express, Capital One y Mastercard cierran en junio; Visa entra con su 3T fiscal (abr–jun), aunque sus ingresos por servicios se calculan sobre el volumen del trimestre anterior. Capital One: interanuales no homogéneos por Discover (cerrada en mayo de 2025) y Brex (desde el 7-abr-2026); se usan la comparación con el 1T y las cifras sin Discover que da la compañía. Cifras según las publican las compañías; lo calculado se indica. Julio, agosto y las conferencias de septiembre se refieren al 3T y se presentan por separado. Las comparaciones con el 1T proceden, cuando no las publica la compañía, del informe anterior.",
   "glosario": [
    {
     "t": "Billed business",
     "d": "Gasto total cargado en tarjetas emitidas por American Express."
    },
    {
     "t": "GDV / payments volume",
     "d": "Valor bruto de las compras y pagos realizados con tarjetas de la marca (Mastercard / Visa)."
    },
    {
     "t": "Cross-border",
     "d": "Operaciones en las que el emisor de la tarjeta y el comercio están en países distintos."
    },
    {
     "t": "Transacciones conmutadas / procesadas",
     "d": "Operaciones que pasan por la red de la compañía para su autorización, compensación o liquidación."
    },
    {
     "t": "NCO / net write-off",
     "d": "Préstamos dados por incobrables netos de recuperaciones, en porcentaje de la cartera."
    },
    {
     "t": "Morosidad 30+",
     "d": "Saldos con más de 30 días de retraso en el pago; indicador adelantado de pérdidas."
    },
    {
     "t": "VAS",
     "d": "Servicios de valor añadido: seguridad, fraude, datos, autenticación, consultoría o marketing."
    },
    {
     "t": "Brownout",
     "d": "Contracción temporal de la cartera Discover mientras migra a la tecnología de Capital One."
    }
   ]
  }
 ],
 "homebuilders": [
  {
   "sector": "homebuilders",
   "trimestre": "2026-2T",
   "sectorNombre": "Homebuilders",
   "label": "2T 2026",
   "labelAnterior": "1T 2026",
   "meses": "abr–jun 2026",
   "publicado": "18-sep-2026",
   "empresas": [
    {
     "id": "DHI",
     "nombre": "D.R. Horton"
    },
    {
     "id": "LEN",
     "nombre": "Lennar"
    },
    {
     "id": "TOL",
     "nombre": "Toll Brothers"
    }
   ],
   "titulo": "Margen antes que volumen: los incentivos ceden algo, los pedidos se estancan y el comprador de entrada choca con los tipos mientras el de lujo aguanta",
   "tarjeta": "Margen antes que volumen: los incentivos ceden, los pedidos se estancan y los tipos frenan al comprador de entrada",
   "drivers": "pedidos netos y absorción · incentivos y buydowns · precio medio · margen bruto · cancelaciones · tipos hipotecarios · costes de suelo y construcción",
   "pregunta": {
    "q": "¿Se sostiene la demanda de vivienda nueva sin subir más los incentivos?",
    "a": "Solo a costa del volumen. Los incentivos bajan ligeramente (Lennar 12,9% de los ingresos, Toll ~7,5% del precio, buydown medio de D.R. Horton del 1,6%) y los márgenes se estabilizan, pero los pedidos quedan planos en D.R. Horton, caen un 4% en Lennar y crecen en Toll solo por la apertura de comunidades. D.R. Horton y Lennar recortan sus previsiones anuales de entregas: el sector prefiere defender el precio a forzar ventas."
   },
   "takeaways": [
    {
     "lead": "Los pedidos se estancan aunque haya más puntos de venta.",
     "texto": "D.R. Horton firma 23.084 pedidos netos, planos, con un 9% más de comunidades; Lennar, 21.749 (−4%) con 1.683 comunidades frente a 1.617; Toll crece un 5%, pero vende 5,4 viviendas por comunidad frente a 5,6."
    },
    {
     "lead": "El sector elige margen frente a volumen.",
     "texto": "D.R. Horton rebaja su guía anual de entregas a 83.800–84.300 (86.000–87.500 en el informe anterior) tras decidir *hold margin a little more than push into the units*; Lennar la baja a 82.000–83.000 por los tipos y la incertidumbre geopolítica. El margen bruto de viviendas mejora frente al 1T en ambos: 20,7% (20,1%) y 15,6% (15,2%)."
    },
    {
     "lead": "Los incentivos ceden, pero desde niveles muy altos.",
     "texto": "Lennar baja al 12,9% de los ingresos (13,3% un año antes; 14% en el 1T) y a $55.200 por vivienda ($59.500), la primera bajada significativa en tres años, lejos aún del 4–6% que considera normal. Toll pasa de ~8% a ~7,5% del precio y el buydown medio de D.R. Horton, del 1,7% al 1,6%."
    },
    {
     "lead": "El comprador de entrada acusa los tipos; el de lujo, mucho menos.",
     "texto": "Las cancelaciones de D.R. Horton suben al 20% (16% en el 1T), sobre todo por problemas de cualificación hipotecaria, y el tipo medio de su backlog sube por primera vez, al 4,9%. En Toll, las cancelaciones caen al 2,6% del backlog, ~25% de los compradores paga al contado y ~30% de las comunidades subió precios."
    },
    {
     "lead": "La construcción se abarata; el suelo, no.",
     "texto": "D.R. Horton reduce un 5% interanual el coste stick & brick por pie², con el suelo un 5% más caro; Lennar recorta otro 2% secuencial y Toll ve costes planos. Las tres avisan de presiones incipientes: madera, combustible o mano de obra."
    }
   ],
   "cambios": [
    {
     "kpi": "Pedidos netos",
     "dir": "Se frenan",
     "texto": "D.R. Horton pasa de +11,4% interanual en el 1T a pedidos planos; Lennar, de 18.515 pedidos en el 1T a 21.749 por estacionalidad, pero con −4% interanual; Toll, de +7% a +5%."
    },
    {
     "kpi": "Cancelaciones",
     "dir": "Suben en el segmento de entrada",
     "texto": "D.R. Horton, del 16% al 20% (17% un año antes); Lennar, del 13% al 14%; Toll baja del 2,9% al 2,6% del backlog inicial."
    },
    {
     "kpi": "Margen bruto de viviendas",
     "dir": "Se estabiliza en entrada",
     "texto": "D.R. Horton del 20,1% al 20,7%, por encima de su guía; Lennar del 15,2% al 15,6%. Toll (ajustado) baja del 26,2% al 25,6% por incentivos en viviendas spec."
    },
    {
     "kpi": "Incentivos",
     "dir": "Ceden ligeramente",
     "texto": "Lennar del 14% al 12,9% de los ingresos; Toll de ~8% a ~7,5% del precio bruto; buydown medio de D.R. Horton del 1,7% al 1,6%. Todos siguen por encima de sus niveles históricos."
    },
    {
     "kpi": "Guías anuales de entregas",
     "dir": "A la baja",
     "texto": "D.R. Horton de 86.000–87.500 a 83.800–84.300 viviendas e ingresos de $33,5–34,5B a $32,5–33,0B; Lennar rebaja a 82.000–83.000. Toll estrecha su rango de 10.400–10.700 a 10.500–10.600 y sube el precio medio previsto a $995.000–1.000.000."
    },
    {
     "kpi": "Tipos hipotecarios",
     "dir": "Nuevo viento en contra",
     "texto": "En el 1T el freno era la asequibilidad; en el 2T, además, repuntan los tipos y el del backlog de D.R. Horton sube por primera vez."
    }
   ],
   "seguimiento": [
    {
     "kpi": "Pedidos sin más incentivos",
     "dir": "Se cumple a medias",
     "texto": "Los incentivos no suben (bajan algo en los tres), pero los pedidos tampoco: planos en D.R. Horton, −4% en Lennar y +5% en Toll solo gracias a un 12% más de comunidades."
    },
    {
     "kpi": "Cancelaciones en primera vivienda",
     "dir": "Empeora",
     "texto": "D.R. Horton, con ~2/3 del negocio en primera vivienda, sube al 20%, sobre todo por la cualificación hipotecaria. Lennar se mantiene en el 14%."
    },
    {
     "kpi": "Margen bruto y buydowns",
     "dir": "Mejor de lo esperado",
     "texto": "La lectura del 1T (volumen defendido a costa de margen) se matiza: los márgenes de D.R. Horton y Lennar suben frente al 1T por costes de construcción más bajos y algo menos de incentivos. Pero el tipo del backlog de D.R. Horton sube al 4,9%, lo que encarece los buydowns."
    },
    {
     "kpi": "Precio medio, mix y tamaño",
     "dir": "Sigue la bajada en entrada",
     "texto": "Precio medio de entrega −2% en D.R. Horton ($362.000) y −5% en Lennar ($371.000); los ingresos por pie² de D.R. Horton bajan un 3%. Toll sube un 2% ($996.400) por mix. No hay datos de tamaño medio de vivienda."
    },
    {
     "kpi": "Entrada frente a lujo",
     "dir": "Se mantiene la divergencia",
     "texto": "Toll conserva cancelaciones mínimas y compradores con patrimonio; niega *any sort of material change* en su comprador move-up. Pero su ritmo de ventas por comunidad (5,4) sigue por debajo del año anterior y de sus niveles históricos."
    },
    {
     "kpi": "Conversión del backlog",
     "dir": "Mejora",
     "texto": "D.R. Horton entrega 23.983 viviendas, en el extremo alto de su guía, con el ciclo ~3 semanas más corto; Lennar marca un ciclo récord de 121 días (132 un año antes)."
    }
   ],
   "scorecard": [
    {
     "titulo": "Resultados",
     "filas": [
      {
       "kpi": "Ingresos por venta de viviendas",
       "nota": "variación interanual publicada",
       "v": {
        "DHI": {
         "v": "$8,68B · +1%",
         "c": "Consolidado $9,23B (3T FY25: $9,23B)"
        },
        "LEN": {
         "v": "$7,60B · −2%",
         "c": "Ingresos totales $7,94B"
        },
        "TOL": {
         "v": "$2,65B",
         "c": "3T FY25: $2,88B; −7,9% (calculado)"
        }
       }
      },
      {
       "kpi": "Margen bruto de viviendas",
       "v": {
        "DHI": {
         "v": "20,7% · −110 pb",
         "c": "1T: 20,1%; por encima de la guía"
        },
        "LEN": {
         "v": "15,6%",
         "c": "2T FY25: 17,8%; 1T: 15,2%"
        },
        "TOL": {
         "v": "25,6% ajustado",
         "c": "3T FY25: 27,5%; GAAP 23,9%"
        }
       }
      },
      {
       "kpi": "SG&A sobre ingresos",
       "v": {
        "DHI": {
         "v": "8,3%",
         "c": "3T FY25: 7,8%; gasto +8%"
        },
        "LEN": {
         "v": "9,2%",
         "c": "2T FY25: 8,8%"
        },
        "TOL": {
         "v": "10,0%",
         "c": "3T FY25: 8,8%; en línea con la guía"
        }
       }
      },
      {
       "kpi": "Beneficio neto y BPA",
       "v": {
        "DHI": {
         "v": "904,9 M$ · −12%",
         "c": "BPA $3,20 (−5%); sin BPA ajustado"
        },
        "LEN": {
         "v": "305 M$ · BPA $1,24",
         "c": "Ajustado $1,31 (2T FY25: $1,90); MTM −23 M$"
        },
        "TOL": {
         "v": "280,1 M$ · −24%",
         "c": "BPA $2,97 (3T FY25: $3,73); deterioros de JV 39,6 M$"
        }
       }
      },
      {
       "kpi": "Guía anual de entregas",
       "nota": "ejercicio fiscal 2026",
       "v": {
        "DHI": {
         "v": "83.800–84.300",
         "c": "Rebajada; ingresos $32,5–33,0B"
        },
        "LEN": {
         "v": "82.000–83.000",
         "c": "Rebajada (*moderating*)"
        },
        "TOL": {
         "v": "10.500–10.600",
         "c": "Rango estrechado; precio medio al alza"
        }
       }
      }
     ]
    },
    {
     "titulo": "Indicadores sectoriales",
     "filas": [
      {
       "kpi": "Pedidos netos",
       "nota": "viviendas",
       "v": {
        "DHI": {
         "v": "23.084 · plano",
         "c": "Valor $8,44B; 1T: 24.992 (+11,4%)"
        },
        "LEN": {
         "v": "21.749 · −4%",
         "c": "Valor $8,21B; 1T: 18.515"
        },
        "TOL": {
         "v": "2.508 · +5%",
         "c": "5,4 por comunidad (3T FY25: 5,6)"
        }
       }
      },
      {
       "kpi": "Entregas",
       "nota": "viviendas",
       "v": {
        "DHI": {
         "v": "23.983 · +4%",
         "c": "Extremo alto de la guía"
        },
        "LEN": {
         "v": "20.519 · +2%",
         "c": "Dentro de la guía (20.000–21.000)"
        },
        "TOL": {
         "v": "2.662 · −10%",
         "c": "3T FY25: 2.959"
        }
       }
      },
      {
       "kpi": "Precio medio de entrega",
       "v": {
        "DHI": {
         "v": "$362.000 · −2%",
         "c": "Plano frente al 1T"
        },
        "LEN": {
         "v": "$371.000 · −5%",
         "c": "2T FY25: $389.000"
        },
        "TOL": {
         "v": "$996.400 · +2%",
         "c": "Por mix; por encima de la guía"
        }
       }
      },
      {
       "kpi": "Incentivos",
       "nota": "definiciones distintas",
       "v": {
        "DHI": {
         "v": "Buydown medio 1,6%",
         "c": "1T: 1,7%; «elevados» frente a la historia"
        },
        "LEN": {
         "v": "12,9% de ingresos",
         "c": "2T FY25: 13,3%; normal: 4–6%"
        },
        "TOL": {
         "v": "~7,5% del precio bruto",
         "c": "~8% en el último año"
        }
       }
      },
      {
       "kpi": "Cancelaciones",
       "nota": "definiciones distintas",
       "v": {
        "DHI": {
         "v": "20%",
         "c": "1T: 16%; 3T FY25: 17%"
        },
        "LEN": {
         "v": "14%",
         "c": "2T FY25: 14%; 1T: 13%"
        },
        "TOL": {
         "v": "2,6% del backlog inicial",
         "c": "5,4% de los contratos; 3T FY25: 3,2%"
        }
       }
      },
      {
       "kpi": "Backlog",
       "v": {
        "DHI": {
         "v": "15.983 · +14%",
         "c": "$6,18B (+16%); precio medio $386.600"
        },
        "LEN": {
         "v": "16.818 · $6,61B",
         "c": "2T FY25: 15.538; precio medio $393.000 ($417.000)"
        },
        "TOL": {
         "v": "5.312 · −3%",
         "c": "$6,24B (−2%); precio medio $1.174.400"
        }
       }
      },
      {
       "kpi": "Comunidades activas",
       "v": {
        "DHI": {
         "v": "+9% interanual",
         "c": "+2% frente al 1T; sin cifra absoluta"
        },
        "LEN": {
         "v": "1.683",
         "c": "2T FY25: 1.617"
        },
        "TOL": {
         "v": "471 · +12%",
         "c": "1T: 459; guía de cierre 480–490"
        }
       }
      },
      {
       "kpi": "Costes de construcción",
       "v": {
        "DHI": {
         "v": "Stick & brick −5%/pie²",
         "c": "Suelo +5% interanual"
        },
        "LEN": {
         "v": "−2% secuencial",
         "c": "−13% en varios años; suelo más caro"
        },
        "TOL": {
         "v": "Planos",
         "c": "Madera ligeramente al alza"
        }
       }
      },
      {
       "kpi": "Financiación del comprador",
       "v": {
        "DHI": {
         "v": "Tipo del backlog 4,9%",
         "c": "Mercado ~6,5%; 65% primera vivienda"
        },
        "LEN": {
         "v": "Captación hipotecaria 83%",
         "c": "2T FY25: 85%"
        },
        "TOL": {
         "v": "~25% al contado",
         "c": "LTV medio ~69%"
        }
       }
      }
     ]
    }
   ],
   "scorecardNota": "B = miles de millones. Periodos fiscales distintos: D.R. Horton abr–jun, Lennar mar–may y Toll Brothers may–jul. Las referencias del «1T» proceden del informe anterior, que combinaba trimestres fiscales. Incentivos y cancelaciones no son homogéneos: Lennar mide incentivos sobre ingresos de entregas, Toll sobre el precio bruto de los contratos y D.R. Horton solo publica el buydown medio; Toll calcula las cancelaciones sobre el backlog inicial. Toll publica margen bruto ajustado (sin intereses ni deterioros); Lennar, BPA ajustado sin pérdidas mark-to-market.",
   "companias": [
    {
     "e": "DHI",
     "nombre": "D.R. Horton",
     "titular": "Recorta volumen para defender el margen",
     "texto": "Margen del 20,7%, por encima de su guía, por menores costes de estructura y algo menos de incentivos; la demanda *softened a little bit* en el trimestre y las cancelaciones suben al 20%. Rebaja la guía anual de entregas e ingresos. Cargos de suelo e inventario de 21,9 M$ (54,2 M$); no publica BPA ajustado."
    },
    {
     "e": "LEN",
     "nombre": "Lennar",
     "titular": "Los incentivos bajan por primera vez en tres años",
     "texto": "Sin transcript del call: lectura basada en la nota de resultados y el 10-Q. Incentivos del 12,9% y margen del 15,6%, que prevé llevar al ~16% en el 3T FY26. Pérdidas mark-to-market de 23 M$ (BPA ajustado $1,31) y ajustes de valoración de inventario de 68,2 M$."
    },
    {
     "e": "TOL",
     "nombre": "Toll Brothers",
     "titular": "El lujo resiste, con el crecimiento apoyado en nuevas comunidades",
     "texto": "Margen ajustado del 25,6%, 35 pb por encima de su guía; sube la previsión anual de precio medio y amplía recompras de 650 a 700 M$. Deterioros de joint ventures de 39,6 M$. Compra los activos de Buffington Homes (Arkansas; ~1.500 parcelas)."
    }
   ],
   "exhibits": [
    {
     "titulo": "El margen bruto se estabiliza en el segmento de entrada tras la caída interanual; Toll sigue cediendo",
     "sub": "Margen bruto en venta de viviendas, %. Toll: ajustado",
     "tipo": "bar",
     "unidad": "%",
     "dec": 1,
     "trimestres": [
      "2T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "DHI": [
       21.8,
       20.1,
       20.7
      ],
      "LEN": [
       17.8,
       15.2,
       15.6
      ],
      "TOL": [
       27.5,
       26.2,
       25.6
      ]
     },
     "fuente": "notas de resultados y 10-Q de las compañías; 1T26: informe anterior. Periodos fiscales asignados al trimestre natural."
    },
    {
     "titulo": "Las cancelaciones suben en D.R. Horton y siguen en mínimos en el lujo",
     "sub": "Tasa de cancelación, %. Toll: sobre el backlog inicial",
     "tipo": "bar",
     "unidad": "%",
     "dec": 1,
     "trimestres": [
      "2T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "DHI": [
       17,
       16,
       20
      ],
      "LEN": [
       14,
       13,
       14
      ],
      "TOL": [
       3.2,
       2.9,
       2.6
      ]
     },
     "fuente": "notas de resultados y 10-Q; 1T26: informe anterior. Definiciones no homogéneas."
    },
    {
     "titulo": "D.R. Horton: el North crece mientras el Northwest cae con los despidos tecnológicos de Seattle",
     "sub": "D.R. Horton: pedidos netos por región, variación interanual en el 3T FY26, %",
     "tipo": "bar",
     "unidad": "%",
     "dec": 0,
     "trimestres": [
      "Northwest",
      "South Central",
      "Southwest",
      "East",
      "Southeast",
      "North"
     ],
     "series": {
      "DHI": [
       -9,
       -2,
       -1,
       -1,
       0,
       11
      ]
     },
     "fuente": "10-Q de D.R. Horton (abr–jun 2026)."
    },
    {
     "titulo": "Lennar: el margen del West (12,6% frente a 16,7%) y del Central se hunde; el East mejora",
     "sub": "Lennar: margen bruto en venta de viviendas por región en el 2T FY26, %",
     "tipo": "bar",
     "unidad": "%",
     "dec": 1,
     "trimestres": [
      "West",
      "Central",
      "South Central",
      "East"
     ],
     "series": {
      "LEN": [
       12.6,
       15.4,
       17.3,
       19.1
      ]
     },
     "fuente": "10-Q de Lennar (mar–may 2026). Un año antes: West 16,7%, Central 18,7%, South Central 17,5%, East 18,9%."
    }
   ],
   "temas": [
    {
     "titulo": "Disciplina de precio: los promotores dejan de comprar volumen",
     "parrafos": [
      "El cambio de tono respecto al 1T es claro. Entonces el volumen se sostenía con incentivos y buydowns; en el 2T, D.R. Horton reconoce que sus ventas quedaron por debajo de su ritmo interno esperado y que decidió proteger el margen antes que empujar unidades. Rebaja su guía anual de entregas y la de ingresos. Lennar, en la misma línea, *modera* su previsión de entregas a 82.000–83.000 citando los tipos de interés y la incertidumbre geopolítica.",
      "El resultado es un mercado **estable en precio pero no en absorción**: D.R. Horton crece un 9% en comunidades y no vende más; Lennar abre un 4% más y vende un 4% menos. Si la disciplina se generaliza podría aliviar la presión promocional, a costa de volúmenes más bajos y de un SG&A que pierde apalancamiento (8,3%, 9,2% y 10,0% de los ingresos, todos por encima del año anterior)."
     ],
     "evidencias": [
      {
       "e": "DHI",
       "t": "Pedidos planos (23.084) con comunidades +9%; no ve cambios relevantes en el inventario de la competencia y describe un sector disciplinado."
      },
      {
       "e": "LEN",
       "t": "Intención de compra alta pero sin urgencia: *intent is high but urgency to close remains measured* (10-Q)."
      },
      {
       "e": "TOL",
       "t": "Pedidos +5% con comunidades +12%; ventas por comunidad 5,4 frente a 5,6 y por debajo de sus niveles históricos."
      }
     ]
    },
    {
     "titulo": "La deflación de la construcción sostiene el margen; el suelo lo limita",
     "parrafos": [
      "La mejora secuencial de márgenes no procede del precio, que sigue bajando en el segmento de entrada, sino del coste. D.R. Horton cifra en un 5% la caída interanual del coste stick & brick por pie², con el mayor ahorro en estructura y mano de obra. Lennar recorta otro 2% secuencial y reduce su ciclo de construcción a un récord de 121 días.",
      "El contrapeso es el suelo: +5% interanual en D.R. Horton, que prevé un ritmo similar en el 4T, y la principal causa, junto con el menor ingreso por pie², de la caída interanual del margen de Lennar. Los directivos avisan además de que **el recorrido del ahorro se agota**: D.R. Horton anticipa *a slight lumber headwind* en FY27 y costes de combustible al alza; Toll ya ve la madera ligeramente más cara."
     ],
     "evidencias": [
      {
       "e": "DHI",
       "t": "Puente del margen (−110 pb interanual): el coste por vivienda sube mientras baja el precio medio; incentivos más altos que un año antes, incluidos buydowns."
      },
      {
       "e": "LEN",
       "t": "Margen bruto del 15,6% frente al 17,8%: menores ingresos por pie² y suelo más caro, compensados en parte por construcción más barata."
      },
      {
       "e": "TOL",
       "t": "Costes de construcción planos y sin presión en urbanización; la caída del margen ajustado (−190 pb, calculado) viene de más incentivos en viviendas spec."
      }
     ]
    },
    {
     "titulo": "Una demanda en K: el patrimonio protege al lujo, el tipo hipotecario limita la entrada",
     "parrafos": [
      "La divergencia del informe anterior se mantiene. En D.R. Horton, con dos tercios del negocio en primera vivienda y un precio medio ~30% por debajo de la media nacional de vivienda nueva, las cancelaciones suben al 20% por la cualificación hipotecaria. Hay compradores en las oficinas de venta, pero les falta confianza en la economía.",
      "En Toll, ~25% paga al contado, el LTV medio de quienes financian es ~69% y ~30% de las comunidades subió precios. La compañía atribuye la resistencia a clientes con **más renta, plusvalías acumuladas en su vivienda y carteras de acciones**, y niega señales de agotamiento de ese comprador. Es consistente con un efecto riqueza que sostiene la parte alta mientras el comprador de renta media depende del coste de financiación."
     ],
     "evidencias": [
      {
       "e": "DHI",
       "t": "Tipo medio del backlog de su filial hipotecaria: 4,9% frente a ~6,5% de mercado; la oferta más habitual, entre el 4,99% y el 5,5%."
      },
      {
       "e": "LEN",
       "t": "South Central (Texas, Oklahoma, Arkansas, Kansas), con el precio más bajo ($233.000), concentra los mayores incentivos (19,1%) y la cancelación más alta (17%)."
      },
      {
       "e": "TOL",
       "t": "Luxury move-up, el segmento de mayor margen, supone ~61% de los ingresos, con un precio medio de ~$1,35M."
      }
     ]
    },
    {
     "titulo": "La geografía de la debilidad sigue al empleo tecnológico",
     "parrafos": [
      "Los datos regionales dibujan un mapa coherente. D.R. Horton ve su mayor debilidad en el Northwest (pedidos −9%, margen −440 pb), especialmente en Seattle por los despidos en empresas de software, y su mayor fortaleza en el North (pedidos +11%, backlog +36%). Toll coincide: Seattle, Portland y San Francisco entre sus mercados difíciles, junto con Atlanta y Texas.",
      "En Lennar el West es la región más débil (margen del 12,6% frente al 16,7%) y el East mejora con menos incentivos. Su 10-Q añade que la confianza del consumidor se resiente por la preocupación por la **seguridad laboral ante la inteligencia artificial**."
     ],
     "evidencias": [
      {
       "e": "DHI",
       "t": "Pittsburgh y Ohio impulsan los pedidos del año; Seattle y Salt Lake City los lastran (10-Q)."
      },
      {
       "e": "LEN",
       "t": "Central: margen del 15,4% frente al 18,7%, con precio medio de $361.000 ($384.000)."
      },
      {
       "e": "TOL",
       "t": "Mercados fuertes: Florida, de Boston a las Carolinas, Boise, Las Vegas, Reno y Denver."
      }
     ]
    }
   ],
   "citas": [
    {
     "texto": "We did make the decision to hold margin a little more than push into the units.",
     "quien": "Paul Romanowski",
     "contexto": "D.R. Horton, call del 3T FY26 (21-jul)"
    },
    {
     "texto": "Demand is real, deferred, and building.",
     "quien": "Stuart Miller, Executive Chairman y CEO",
     "contexto": "Lennar, nota de resultados del 2T FY26"
    },
    {
     "texto": "Our buyer is able to weather this more difficult market because of their affluence and their strength.",
     "quien": "Douglas Yearley",
     "contexto": "Toll Brothers, call del 3T FY26 (19-ago)"
    }
   ],
   "pulso": {
    "etiqueta": "Después del trimestre · call de Lennar del 17 de septiembre (3T FY26, jun–ago) y agosto en Toll Brothers",
    "titulo": "El verano empeora: hipotecas cerca del 7%, pedidos de Lennar por debajo de su guía y una subida de tipos de la Fed",
    "parrafos": [
     "Lennar describe un mercado que *if anything, gotten more difficult since we last spoke in June*. En su 3T fiscal (jun–ago) firma 20.879 pedidos, por debajo de su guía de 21.000–22.000, con margen bruto del 15,8% e incentivos del 12%. Según Stuart Miller, el hipotecario a 30 años pasó del 6,4–6,5% en junio a cerca del 7% y la Fed **subió los tipos el 16 de septiembre**. En muchos mercados casi el 50% de los visitantes no cualifica de inmediato para una hipoteca.",
     "Toll Brothers explicó que el repunte estacional de julio fue más apagado de lo esperado por los tipos, la confianza y la geopolítica, y que siguió así en las primeras ~2,5 semanas de agosto."
    ],
    "bullets": [
     {
      "e": "LEN",
      "t": "Guía del 4T FY26: entregas 22.000–23.000, que implican 80.222–81.222 en el año (calculado), por debajo de las 82.000–83.000 de junio."
     },
     {
      "e": "LEN",
      "t": "Más competencia de la reventa en Texas y Florida; *the cost of our buydown is becoming more expensive* (Miller)."
     },
     {
      "e": "LEN",
      "t": "Mano de obra más escasa por las redadas migratorias y los centros de datos."
     },
     {
      "e": "DHI",
      "t": "En julio, pronto para hacer previsiones y con tipos al alza."
     }
    ]
   },
   "macroIntro": "Los promotores describen una vivienda nueva **estable en precio pero con la absorción estancada**: la asequibilidad y el repunte de los tipos frenan al comprador de renta media, mientras el patrimonio sostiene la parte alta del mercado.",
   "macro": [
    {
     "tema": "Vivienda",
     "texto": "Pedidos planos o a la baja por comunidad y precio medio a la baja en el segmento de entrada (−2% en D.R. Horton, −5% en Lennar).",
     "vs": "Frente al 1T: la demanda pierde tracción; en el 1T los pedidos de D.R. Horton aún crecían un 11,4%."
    },
    {
     "tema": "Tipos hipotecarios",
     "texto": "Hipotecario en la zona media-alta del 6% (Lennar); el tipo del backlog de D.R. Horton sube por primera vez (4,9%) y los buydowns se encarecen.",
     "vs": "Frente al 1T: de freno estructural a freno creciente."
    },
    {
     "tema": "Asequibilidad",
     "texto": "La cualificación hipotecaria es la primera causa de cancelación en D.R. Horton; los incentivos siguen muy por encima de lo normal (Lennar 12,9% frente a 4–6%).",
     "vs": "Frente al 1T: sin mejora; los incentivos ceden por decisión de los promotores, no por más capacidad de pago."
    },
    {
     "tema": "Renta y efecto riqueza",
     "texto": "Toll atribuye su resistencia a rentas altas, plusvalías inmobiliarias y carteras de acciones; Lennar ve subir los salarios con el empleo aún fuerte.",
     "vs": "Frente al 1T: la polarización se mantiene."
    },
    {
     "tema": "Costes de construcción e inflación",
     "texto": "Construcción más barata y suelo más caro (+5% en D.R. Horton). Lennar cita una inflación general del 4,2% en mayo, impulsada por la energía.",
     "vs": "Frente al 1T: la deflación de costes sostiene márgenes, pero asoman madera, combustible y mano de obra."
    },
    {
     "tema": "Empleo regional",
     "texto": "Debilidad en Seattle por despidos en empresas de software (D.R. Horton) y en el oeste (Toll, Lennar); el 10-Q de Lennar cita la preocupación por la seguridad laboral ante la IA.",
     "vs": "Frente al 1T: aparece como factor diferencial explícito."
    }
   ],
   "vigilar": [
    "Pedidos por comunidad: si la disciplina de precio de D.R. Horton y Lennar se sostiene o vuelven los incentivos para recuperar volumen.",
    "Coste de los buydowns con el hipotecario cerca del 7% y tras la subida de tipos de la Fed citada por Lennar; tipo medio del backlog de D.R. Horton.",
    "Cancelaciones en el segmento de entrada (D.R. Horton, 20%) y peso de la cualificación hipotecaria.",
    "Competencia de la vivienda de segunda mano en Texas y Florida.",
    "Fin de la deflación de costes: madera, combustible, mano de obra (inmigración, centros de datos) y suelo (+5%).",
    "Resistencia del comprador de lujo tras un julio y un agosto más apagados en Toll.",
    "Empleo tecnológico y confianza del consumidor en los mercados del oeste."
   ],
   "proximo": "Próximos resultados: D.R. Horton publica su 4T FY26 (jul–sep) el 29-oct-2026. El 3T FY26 de Lennar (jun–ago), presentado el 17-sep, se integrará en el informe del 3T 2026 junto con el 4T FY26 de Toll Brothers (ago–oct).",
   "cobertura": [
    {
     "empresa": "D.R. Horton",
     "fiscal": "3T FY26",
     "meses": "abr–jun",
     "publicado": "21-jul-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/882184/000088218426000092/a6302026exhibit991.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/882184/000088218426000096/dhi-20260630.htm"
      },
      {
       "t": "Call 21-jul"
      }
     ]
    },
    {
     "empresa": "Lennar",
     "fiscal": "2T FY26",
     "meses": "mar–may",
     "publicado": "11-jun-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/920760/000162828026042551/ex991-2026531x8kq1.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/920760/000162828026046019/len-20260531.htm"
      },
      {
       "t": "Call 12-jun (sin transcript)"
      },
      {
       "t": "Call del 3T FY26, 17-sep (después del trimestre)"
      }
     ]
    },
    {
     "empresa": "Toll Brothers",
     "fiscal": "3T FY26",
     "meses": "may–jul",
     "publicado": "18-ago-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/794170/000079417026000096/tol-7312026x8kexh991.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/794170/000079417026000102/tol-20260731.htm"
      },
      {
       "t": "Call 19-ago"
      }
     ]
    }
   ],
   "metodo": "Trimestre natural: cada compañía se asigna al trimestre natural con el que comparte más días de su periodo fiscal: D.R. Horton (abr–jun), Lennar (mar–may) y Toll Brothers (may–jul). La sección de Lennar se basa en la nota de resultados y el 10-Q, sin transcript del call del 12 de junio. El informe anterior, en formato antiguo, mezclaba trimestres fiscales (D.R. Horton ene–mar, Lennar dic–feb, Toll Brothers feb–abr); se trata como «1T 2026» y de él proceden las referencias del 1T. Cifras según las publican las compañías; los cálculos propios se marcan. El call de Lennar del 17 de septiembre (jun–ago) y lo dicho por Toll sobre agosto corresponden al 3T y se presentan por separado.",
   "glosario": [
    {
     "t": "Pedidos netos",
     "d": "Contratos de venta firmados en el periodo menos cancelaciones; principal indicador adelantado de demanda."
    },
    {
     "t": "Entregas (closings)",
     "d": "Viviendas escrituradas y entregadas; es cuando se reconoce el ingreso."
    },
    {
     "t": "Backlog",
     "d": "Viviendas vendidas pendientes de entrega; da visibilidad sobre los ingresos futuros."
    },
    {
     "t": "Tasa de cancelación",
     "d": "Contratos cancelados sobre pedidos brutos (o sobre el backlog inicial, en Toll); mide la fragilidad de la demanda."
    },
    {
     "t": "Buydown",
     "d": "Incentivo con el que el promotor abarata el tipo hipotecario del comprador para reducir su cuota mensual."
    },
    {
     "t": "Spec",
     "d": "Vivienda iniciada sin comprador firmado; se opone a la vivienda construida por encargo (build-to-order)."
    },
    {
     "t": "Stick & brick",
     "d": "Coste de construcción de la vivienda (estructura, materiales y mano de obra), sin incluir el suelo."
    },
    {
     "t": "Land-light",
     "d": "Modelo en el que el promotor controla el suelo mediante opciones o land banks en lugar de comprarlo."
    }
   ]
  }
 ],
 "homeimprovement": [
  {
   "sector": "homeimprovement",
   "trimestre": "2026-2T",
   "sectorNombre": "Home Improvement",
   "label": "2T 2026",
   "labelAnterior": "1T 2026",
   "meses": "abr–jun 2026",
   "publicado": "18-sep-2026",
   "empresas": [
    {
     "id": "HD",
     "nombre": "Home Depot"
    },
    {
     "id": "LOW",
     "nombre": "Lowe's"
    },
    {
     "id": "SHW",
     "nombre": "Sherwin-Williams"
    }
   ],
   "titulo": "Crecimiento por ticket y márgenes apoyados en devoluciones arancelarias: las transacciones siguen cayendo y la vivienda no da señales de giro",
   "tarjeta": "Comparables por ticket, transacciones a la baja y márgenes apoyados en devoluciones arancelarias puntuales",
   "drivers": "comparables · transacciones y ticket · big-ticket · Pro frente a DIY · rotación de vivienda y tipos · costes de inputs y aranceles · online",
   "pregunta": {
    "q": "¿Pasan las comparables del ticket a las transacciones?",
    "a": "No. Las transacciones comparables siguen en negativo en Home Depot (−1,0%) y empeoran en Lowe's (−2,1%, frente a −0,9% en el 1T), mientras el ticket acelera en ambas (+2,8% y +2,3%). El crecimiento sigue viniendo de precio, mix y cuota, no de más proyectos; y el margen del trimestre se apoya además en devoluciones de aranceles IEEPA que no se repetirán."
   },
   "takeaways": [
    {
     "lead": "Comparables positivas, sostenidas por el ticket.",
     "texto": "Home Depot mejora a +1,7% (+0,6% en el 1T) con transacciones −1,0% y ticket +2,8%; Lowe's se frena a +0,2% con transacciones −2,1% y ticket +2,3%. En Sherwin-Williams, las comparables de Paint Stores Group suben un 4,2% con precio de dígito medio y volumen de dígito bajo."
    },
    {
     "lead": "Las devoluciones de aranceles IEEPA inflan el margen bruto.",
     "texto": "Home Depot registra 685 M$ en coste de ventas (≈145 pb de margen bruto); sin ellos, el margen rondaría el 32,3% (calculado) frente al 33,7% reportado. Lowe's reconoce ≈80 M$ (≈30 pb; $0,11 por acción). Ninguna de las dos los excluye del beneficio ajustado."
    },
    {
     "lead": "Parte del reembolso se ha ido a precio.",
     "texto": "Según Lowe's, en julio varios competidores usaron las devoluciones para rebajar productos de temporada; Lowe's no igualó y sus comparables de julio caen un 1,2%. Home Depot, por su parte, afirma haber destinado las devoluciones a sostener sus precios para el cliente."
    },
    {
     "lead": "Vuelve la presión de costes por energía y materias primas.",
     "texto": "Home Depot cifra en ≈60 pb los costes no previstos (combustible, energía, resinas, metales); Lowe's espera más combustible y transporte en el 2S; Sherwin-Williams prevé materias primas +dígito alto en el 2S y sube un 8% los precios de Paint Stores Group desde el 1-sep."
    },
    {
     "lead": "Reparación sí, proyecto grande no.",
     "texto": "La rotación de vivienda sigue en mínimos (≈3% del parque, según Home Depot), la obra nueva en mínimos plurianuales (Lowe's) y el big-ticket crece solo en compras no financiadas; el repintado residencial, a dígito medio. Lowe's recorta la guía al extremo bajo, Home Depot la reitera y Sherwin-Williams la eleva sin suponer recuperación."
    }
   ],
   "cambios": [
    {
     "kpi": "Comparables de Home Depot",
     "dir": "Mejora",
     "texto": "De +0,6% en el 1T a +1,7% en el 2T (EE.UU. de +0,4% a +1,3%), con aceleración mes a mes hasta +2,3% en julio y 13 de 16 departamentos en positivo."
    },
    {
     "kpi": "Comparables de Lowe's",
     "dir": "Se frena",
     "texto": "De +0,6% a +0,2%, con transacciones de −0,9% a −2,1%. Julio cae un 1,2%, aunque a dos años sale en +3,4% según la compañía."
    },
    {
     "kpi": "Ticket medio",
     "dir": "Acelera",
     "texto": "Home Depot, de +2,2% a +2,8% ($92,50); Lowe's, de +1,5% a +2,3% ($107,90), por inflación moderada de precios y fuerza del Pro."
    },
    {
     "kpi": "Big-ticket",
     "dir": "Mejora parcial",
     "texto": "Home Depot pasa de +0,8% a +2,4% (más de 1.000 $), por patio, energía portátil y refrigeración: compras únicas, no financiadas."
    },
    {
     "kpi": "Margen bruto",
     "dir": "Sube por partidas puntuales",
     "texto": "Home Depot, de 33,0% a 33,7%, con ≈145 pb de devoluciones IEEPA; Lowe's, de 32,7% a 33,0%, pero −80 pb interanual por la dilución de FBM y ADG. Sherwin-Williams, de 49,1% a 49,2%."
    },
    {
     "kpi": "Costes de inputs",
     "dir": "Se intensifican",
     "texto": "Lo que en el 1T era un riesgo se concreta: combustible, energía, resinas, metales y transporte. Sherwin-Williams eleva su previsión de materias primas; en julio aparecen además promociones de la competencia financiadas con devoluciones."
    },
    {
     "kpi": "Guía anual",
     "dir": "Divergente",
     "texto": "Lowe's recorta al extremo bajo (comparables planas); Home Depot reitera (plano a +2,0%); Sherwin-Williams eleva ventas y BPA."
    }
   ],
   "seguimiento": [
    {
     "kpi": "Comparables: de ticket a transacciones",
     "dir": "No se produce",
     "texto": "Las transacciones siguen en negativo (Home Depot −1,0%, Lowe's −2,1%) y el ticket gana peso. En Lowe's la caída se concentra en DIY y en categorías de exterior sensibles al clima."
    },
    {
     "kpi": "Pro frente a DIY",
     "dir": "El Pro sigue por delante",
     "texto": "Home Depot: Pro positivo y mejor que DIY. Lowe's: Pro positivo, con el DIY (más del 60% de sus ventas) presionado. Sherwin-Williams: DIY *muted*, mejor en el segmento premium."
    },
    {
     "kpi": "Big-ticket y proyectos financiados",
     "dir": "Solo compras no financiadas",
     "texto": "Home Depot +2,4% en big-ticket por compras únicas; Lowe's habla de cautela continuada en big-ticket discrecional y de proyectos más pequeños centrados en reparación y mantenimiento."
    },
    {
     "kpi": "Rotación de vivienda",
     "dir": "Sin cambio",
     "texto": "Home Depot sitúa la rotación en mínimos históricos (≈3% del parque) desde hace cuatro años y no ve señal de inflexión. Lowe's señala la asequibilidad (tipos, precio de la vivienda, seguros, impuestos) como principal preocupación."
    },
    {
     "kpi": "Repintado frente a obra nueva",
     "dir": "Repintado por delante",
     "texto": "Repintado residencial +dígito medio. Obra nueva: +dígito bajo en el trimestre por captación de cuentas, pero −dígito bajo en el semestre, con las terminaciones unifamiliares cayendo a dígito alto en 2026."
    },
    {
     "kpi": "Inflación de materiales y aranceles",
     "dir": "Se intensifica",
     "texto": "Costes no previstos de ≈60 pb en Home Depot y nuevos aranceles no incluidos en su plan; subida del 8% de Sherwin-Williams. Las devoluciones IEEPA compensan en parte, pero son puntuales."
    },
    {
     "kpi": "Digital, IA y servicios",
     "dir": "Avanza",
     "texto": "Online +11,0% en Home Depot (16,6% de las ventas) y +15,7% en Lowe's; Mylow supera los 25 millones de preguntas y Home Services crece."
    }
   ],
   "scorecard": [
    {
     "titulo": "Resultados",
     "filas": [
      {
       "kpi": "Ventas",
       "nota": "variación interanual",
       "v": {
        "HD": {
         "v": "$47,9B · +5,7%",
         "c": "Incluye GMS (≈$1,4B) y Mingledorff's"
        },
        "LOW": {
         "v": "$26,0B · +8,3%",
         "c": "Incluye FBM y ADG (1.941 M$)"
        },
        "SHW": {
         "v": "$6,79B · +7,5%",
         "c": "Adquisiciones +2,2%; divisa +0,8%"
        }
       }
      },
      {
       "kpi": "Margen bruto",
       "v": {
        "HD": {
         "v": "33,7%",
         "c": "2T25: 33,4%; ≈145 pb de devoluciones IEEPA"
        },
        "LOW": {
         "v": "33,0%",
         "c": "2T25: 33,8%; ≈30 pb de devoluciones IEEPA"
        },
        "SHW": {
         "v": "49,2%",
         "c": "2T25: 49,4%; dilución de Suvinil"
        }
       }
      },
      {
       "kpi": "Margen operativo",
       "v": {
        "HD": {
         "v": "14,3% · ajustado 14,7%",
         "c": "2T25: 14,5% · 14,8%"
        },
        "LOW": {
         "v": "13,7% · ajustado 14,0%",
         "c": "2T25: 14,5% · 14,7%"
        },
        "SHW": {
         "v": "EBITDA ajustado 21,5%",
         "c": "+60 pb; antes de impuestos 16,4% (15,6%)"
        }
       }
      },
      {
       "kpi": "BPA ajustado",
       "nota": "variación interanual",
       "v": {
        "HD": {
         "v": "$4,92 · +5,1%",
         "c": "GAAP $4,79 (+4,6%)"
        },
        "LOW": {
         "v": "$4,40 · +1,6%",
         "c": "GAAP $4,27, plano; $0,11 de devoluciones"
        },
        "SHW": {
         "v": "$3,70 · +9,5%",
         "c": "GAAP $3,43 (+14,3%)"
        }
       }
      },
      {
       "kpi": "Guía anual",
       "v": {
        "HD": {
         "v": "Reiterada",
         "c": "Comparables plano a +2,0%; incluye devoluciones"
        },
        "LOW": {
         "v": "Al extremo bajo",
         "c": "Comparables planas; BPA ajustado ≈$12,25"
        },
        "SHW": {
         "v": "Elevada",
         "c": "BPA ajustado $11,80–12,20"
        }
       }
      }
     ]
    },
    {
     "titulo": "Indicadores sectoriales",
     "filas": [
      {
       "kpi": "Ventas comparables",
       "v": {
        "HD": {
         "v": "+1,7%",
         "c": "EE.UU. +1,3% · 1T26: +0,6%"
        },
        "LOW": {
         "v": "+0,2%",
         "c": "1T26: +0,6% · 2T25: +1,1%"
        },
        "SHW": {
         "v": "+4,2% (PSG)",
         "c": "1T26: +2,4% · 2T25: +0,8%"
        }
       }
      },
      {
       "kpi": "Transacciones / volumen",
       "v": {
        "HD": {
         "v": "−1,0%",
         "c": "1T26: −1,3%"
        },
        "LOW": {
         "v": "−2,1%",
         "c": "1T26: −0,9%"
        },
        "SHW": {
         "v": "Volumen +dígito bajo",
         "c": "PSG; no publica transacciones"
        }
       }
      },
      {
       "kpi": "Ticket / precio",
       "v": {
        "HD": {
         "v": "+2,8% · $92,50",
         "c": "1T26: +2,2%"
        },
        "LOW": {
         "v": "+2,3% · $107,90",
         "c": "1T26: +1,5%"
        },
        "SHW": {
         "v": "Precio +dígito medio",
         "c": "Subida del 8% en PSG desde el 1-sep"
        }
       }
      },
      {
       "kpi": "Big-ticket",
       "v": {
        "HD": {
         "v": "+2,4% (>1.000 $)",
         "c": "1T26: +0,8%; compras no financiadas"
        },
        "LOW": {
         "v": "N/D",
         "c": "Cautela en big-ticket discrecional"
        },
        "SHW": {
         "v": "N/D",
         "c": "No aplica"
        }
       }
      },
      {
       "kpi": "Pro frente a DIY",
       "v": {
        "HD": {
         "v": "Pro positivo, por encima de DIY",
         "c": "Sin cifra publicada"
        },
        "LOW": {
         "v": "Pro positivo",
         "c": "Caída de transacciones centrada en DIY"
        },
        "SHW": {
         "v": "DIY *muted*",
         "c": "Repintado residencial +dígito medio"
        }
       }
      },
      {
       "kpi": "Online",
       "v": {
        "HD": {
         "v": "+11,0% · 16,6% de ventas",
         "c": "1T26: 16,5% de ventas"
        },
        "LOW": {
         "v": "+15,7%",
         "c": "1T26: +15,5%; ≈195 pb de las comparables"
        },
        "SHW": {
         "v": "N/D",
         "c": "No publica"
        }
       }
      },
      {
       "kpi": "Devoluciones IEEPA",
       "v": {
        "HD": {
         "v": "≈730 M$ cobrados",
         "c": "685 M$ en coste de ventas; ≈45 M$ en inventario"
        },
        "LOW": {
         "v": "≈80 M$",
         "c": "Guía sin devoluciones adicionales en el 2S"
        },
        "SHW": {
         "v": "Sin menciones",
         "c": "Solo factor de riesgo genérico"
        }
       }
      },
      {
       "kpi": "Inventario",
       "v": {
        "HD": {
         "v": "$26,8B · +≈$2B",
         "c": "Rotación 4,5x (4,6x)"
        },
        "LOW": {
         "v": "$17,7B · +≈$1,4B",
         "c": "≈500 M$ de FBM"
        },
        "SHW": {
         "v": "2.529,7 M$",
         "c": "2T25: 2.484,6 M$"
        }
       }
      },
      {
       "kpi": "Distribución Pro y obra nueva",
       "v": {
        "HD": {
         "v": "SRS: $5,06B de ventas",
         "c": "+62,0% (calculado) con GMS; margen ≈4,9% (calculado)"
        },
        "LOW": {
         "v": "FBM y ADG: 1.941 M$",
         "c": "Beneficio operativo de 3 M$"
        },
        "SHW": {
         "v": "Obra nueva +dígito bajo",
         "c": "−dígito bajo en el 1S26"
        }
       }
      }
     ]
    }
   ],
   "scorecardNota": "B = miles de millones. Home Depot y Lowe's: 2T fiscal (may–jul); Sherwin-Williams: abr–jun. Referencias del 1T26 según el informe anterior del monitor. Las comparables de Sherwin-Williams son las de Paint Stores Group, que publica precio y volumen solo en rangos. Home Depot mide el big-ticket por encima de 1.000 $; Lowe's publica tramos de ticket que no pueden asignarse con fiabilidad. Márgenes y BPA ajustados de Home Depot y Lowe's incluyen las devoluciones IEEPA; las ventas incluyen adquisiciones no comparables.",
   "companias": [
    {
     "e": "HD",
     "nombre": "Home Depot",
     "titular": "Acelera por cuota, con el margen apoyado en devoluciones",
     "texto": "Comparables +1,7%, al alza cada mes hasta +2,3% en julio, con 13 de 16 departamentos en positivo y el Pro por delante del DIY. Reitera la guía anual, que ahora incluye las devoluciones IEEPA, y anticipa un margen bruto del 4T *right around flat*. SRS crece un 62,0% (calculado) por GMS. El CEO está de baja médica temporal."
    },
    {
     "e": "LOW",
     "nombre": "Lowe's",
     "titular": "Recorta la guía al extremo bajo",
     "texto": "Comparables +0,2%, quinto trimestre positivo, pero con transacciones −2,1% y julio en −1,2%, que atribuye a las promociones de la competencia y al clima. Guía: comparables planas y BPA ajustado de ≈$12,25; en el 3T, BPA ajustado ≈7% inferior al del año anterior. FBM y ADG quedan en equilibrio operativo."
    },
    {
     "e": "SHW",
     "nombre": "Sherwin-Williams",
     "titular": "Precio y cuota en un mercado plano",
     "texto": "Paint Stores Group crece un 4,2% en comparables, con Protective & Marine a *mid-teens* y Commercial a dígito alto. Eleva la guía de ventas y BPA sin suponer recuperación de la demanda y sube precios un 8% en septiembre. Cierra 57 tiendas y retira su oferta conjunta con Nippon por AkzoNobel."
    }
   ],
   "exhibits": [
    {
     "titulo": "Home Depot acelera mes a mes; Lowe's se da la vuelta en julio",
     "sub": "Ventas comparables por mes fiscal, 2T 2026, %",
     "tipo": "bar",
     "unidad": "%",
     "dec": 1,
     "trimestres": [
      "Mayo",
      "Junio",
      "Julio"
     ],
     "series": {
      "HD": [
       1.2,
       1.5,
       2.3
      ],
      "LOW": [
       -0.4,
       1.7,
       -1.2
      ]
     },
     "fuente": "calls de resultados (Home Depot, 18-ago; Lowe's, 19-ago). Lowe's: el cambio de fecha del 4 de julio trasladó ≈75 pb de julio a junio; Home Depot: el calor extremo cayó en junio en 2025 y en julio en 2026."
    },
    {
     "titulo": "El ticket explica todo el crecimiento: las transacciones caen en ambos",
     "sub": "Descomposición de las ventas comparables del 2T 2026, %",
     "tipo": "bar",
     "unidad": "%",
     "dec": 1,
     "trimestres": [
      "Comparables",
      "Transacciones",
      "Ticket medio"
     ],
     "series": {
      "HD": [
       1.7,
       -1.0,
       2.8
      ],
      "LOW": [
       0.2,
       -2.1,
       2.3
      ]
     },
     "fuente": "nota de resultados de Home Depot; 10-Q y call de Lowe's."
    },
    {
     "titulo": "La pintura profesional y Home Depot mejoran; Lowe's se frena",
     "sub": "Ventas comparables, %. Sherwin-Williams: Paint Stores Group",
     "tipo": "bar",
     "unidad": "%",
     "dec": 1,
     "trimestres": [
      "2T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "HD": [
       1.0,
       0.6,
       1.7
      ],
      "LOW": [
       1.1,
       0.6,
       0.2
      ],
      "SHW": [
       0.8,
       2.4,
       4.2
      ]
     },
     "fuente": "notas de resultados de las compañías; 1T26 según el informe anterior del monitor."
    },
    {
     "titulo": "El margen bruto de Home Depot sube gracias a las devoluciones; el de Lowe's baja pese a ellas",
     "sub": "Margen bruto, %. El 2T26 incluye ≈145 pb (HD) y ≈30 pb (LOW) de devoluciones IEEPA",
     "tipo": "line",
     "unidad": "%",
     "dec": 1,
     "trimestres": [
      "2T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "HD": [
       33.4,
       33.0,
       33.7
      ],
      "LOW": [
       33.8,
       32.7,
       33.0
      ]
     },
     "fuente": "notas de resultados, 10-Q y calls; 1T26 según el informe anterior del monitor."
    }
   ],
   "temas": [
    {
     "titulo": "El crecimiento sigue viniendo del ticket, no del tráfico",
     "parrafos": [
      "En las dos grandes cadenas las transacciones siguen cayendo y el ticket compensa. Home Depot explica su ticket (+2,8%) por inflación a mismo artículo, mix hacia productos más caros y *trade-up*; Lowe's, por inflación moderada y fuerza del Pro. La fortaleza está en el *middle of the store* (electricidad, fontanería, ferretería, herramientas): reparación, no reforma.",
      "El online aporta ≈195 pb a las comparables de Lowe's (≈85 pb un año antes), lo que con un total de +0,2% **sugiere unas comparables de tienda física negativas**. La divergencia entre Home Depot y Lowe's no parece de mercado: ambas la explican por cuota, clima y precios."
     ],
     "evidencias": [
      {
       "e": "HD",
       "t": "Transacciones −1,0% (443,2 millones) y ticket +2,8%; de los 20 negocios que más aportaron, solo 3 eran de temporada."
      },
      {
       "e": "LOW",
       "t": "Transacciones −2,1%, concentradas en DIY y en categorías de exterior del sur; 9 de 13 categorías en positivo."
      },
      {
       "e": "SHW",
       "t": "Comparables de Paint Stores Group +4,2%, con precio de dígito medio y volumen de dígito bajo; la dirección insiste en que el mercado no ayuda."
      }
     ]
    },
    {
     "titulo": "Devoluciones de aranceles IEEPA: un margen puntual que en parte se ha ido a precio",
     "parrafos": [
      "Tras el fallo del Supremo que invalidó los aranceles IEEPA, Home Depot cobró ≈730 M$: 685 M$ reducen el coste de ventas (≈145 pb) y ≈45 M$ quedan en inventario. Según su CFO, costes no previstos (−60 pb) y el mix de GMS y Mingledorff's (−60 pb) dejan el efecto neto en ≈+25 pb interanual; sin devoluciones, el margen rondaría el 32,3% (calculado). Lowe's reconoce ≈80 M$ (≈30 pb), *largely offset* por combustible y transporte. **Ninguna de las dos lo excluye del beneficio ajustado.**",
      "El efecto llega al precio. Según Lowe's, en julio varios competidores usaron las devoluciones para rebajar productos de temporada (barbacoas, patio, planta viva); no los igualó. Home Depot dice haberlas usado para mantener el valor para el cliente. **Apunta a que parte del reembolso ha acabado en el consumidor.** Lowe's excluye nuevas devoluciones de su guía y Home Depot habla de una base limpia para 2027."
     ],
     "evidencias": [
      {
       "e": "HD",
       "t": "La guía pasa a incluir las devoluciones, que compensan costes sobre todo en el 2T y el 3T; margen bruto del 4T plano."
      },
      {
       "e": "LOW",
       "t": "$0,11 por acción de devoluciones dentro de un BPA ajustado de $4,40; los beneficios futuros se reinvertirán en acciones de cara al cliente."
      },
      {
       "e": "SHW",
       "t": "Sin menciones a aranceles en el call; solo figuran como riesgo genérico."
      }
     ]
    },
    {
     "titulo": "Reparación y mantenimiento sostienen el gasto; la vivienda sigue sin girar",
     "parrafos": [
      "Home Depot sitúa la rotación de vivienda en ≈3% del parque, mínimos de cuatro años, sin inflexión pese a la subida de tipos. Lowe's describe un propietario de renta media con balance sólido pero cauto: los pros tienen carteras estables y proyectos más pequeños, de reparación y mantenimiento. John Burns estima entre 20.000 y 50.000 M$ de demanda diferida.",
      "Sherwin-Williams confirma la división: repintado residencial +dígito medio frente a una obra nueva *very challenging*, con terminaciones unifamiliares cayendo a dígito alto. **El gasto se desplaza del proyecto grande al mantenimiento de la vivienda existente**, condicionado más por la asequibilidad que por el empleo."
     ],
     "evidencias": [
      {
       "e": "HD",
       "t": "Big-ticket +2,4% por compras únicas y no financiadas; *larger discretionary projects remain under pressure*."
      },
      {
       "e": "LOW",
       "t": "Obra residencial *bumping along at multiyear lows*; los tipos presionan a grandes pros y promotores."
      },
      {
       "e": "SHW",
       "t": "DIY bifurcado: el premium mejor; el sensible al precio, *still under pressure*."
      }
     ]
    },
    {
     "titulo": "La inflación de costes vuelve por energía y materias primas",
     "parrafos": [
      "Home Depot cita combustible, energía, resinas, metales y cambios arancelarios no previstos, que restan ≈60 pb a su margen bruto. Lowe's espera más presión de combustible y transporte en el 2S. Sherwin-Williams eleva la inflación de materias primas a dígito alto en el 2S por petróleo, energía, logística y envases.",
      "La respuesta depende del poder de precio: Sherwin-Williams sube un 8% en Paint Stores Group desde el 1 de septiembre, con realización gradual; Home Depot no prevé cambios en su inversión en precio del 2S. Es consistente con **una inflación de inputs que podría trasladarse al coste final de las reformas**."
     ],
     "evidencias": [
      {
       "e": "LOW",
       "t": "Según Ellison, la gasolina supone ≈2% del gasto anual del hogar; la cautela nace de su combinación con geopolítica y macro."
      },
      {
       "e": "SHW",
       "t": "En el 2T las subidas de precio compensaron las materias primas; el BPA del 2S mejora menos que el del 1S por la rampa de costes."
      }
     ]
    },
    {
     "titulo": "Distribución profesional: crece por adquisiciones con márgenes diluidos",
     "parrafos": [
      "SRS (Home Depot) vende $5,06B, un 62,0% más (calculado) con GMS, y crece por encima de la media tras un 2S25 sin tormentas, pero su margen operativo baja a ≈4,9% (6,4%; ambos calculados). FBM y ADG aportan a Lowe's 1.941 M$ con un beneficio operativo de 3 M$, lastradas por la obra residencial.",
      "El contrapunto es lo no residencial: el negocio comercial de FBM (≈55%) va bien y Protective & Marine crece a *mid-teens* por centros de datos, semiconductores y relocalización. **La demanda más sólida del sector está en la construcción ligada a la IA**, no en la vivienda."
     ],
     "evidencias": [
      {
       "e": "HD",
       "t": "Compra de Mingledorff's (HVAC) por ≈$1,1B; venta cruzada de ≈400 M$ prevista en el año entre tiendas y SRS."
      },
      {
       "e": "LOW",
       "t": "ADG tiene un 100% de exposición a la obra residencial y FBM un ≈45%."
      },
      {
       "e": "SHW",
       "t": "Commercial +dígito alto en un mercado *soft*; Europa (CBG) cae a doble dígito por desestocaje."
      }
     ]
    }
   ],
   "citas": [
    {
     "texto": "There remains tremendous pressure on our sector and on anyone connected with housing.",
     "quien": "Richard McPhail, CFO",
     "contexto": "Home Depot, call del 2T FY26"
    },
    {
     "texto": "We don't think it's the new normal. We think it's transitory.",
     "quien": "Marvin Ellison, CEO",
     "contexto": "Lowe's, call del 2T FY26, sobre las rebajas de la competencia"
    },
    {
     "texto": "Growth will need to come from what we do, not from what the market gives us.",
     "quien": "Heidi Petz, CEO",
     "contexto": "Sherwin-Williams, call del 2T26"
    }
   ],
   "pulso": {
    "etiqueta": "Después del trimestre · conferencia de Goldman Sachs del 15 de septiembre",
    "titulo": "Sin inflexión del consumidor y con la guerra de precios de julio vista como transitoria",
    "parrafos": [
     "Home Depot no ve inflexión: el sentimiento del consumidor lleva seis trimestres deteriorándose y, aunque los clientes *have the means to spend*, les frenan inflación, tipos, combustible y empleo. Lowe's espera un 2S muy parecido al 1S, con proyectos más pequeños: piezas sueltas en lugar de cocinas completas.",
     "Sobre precios, Ellison afirma que en el 2T hubo más rebajas y promociones que en sus 25 años en el sector, pero sigue considerándolo transitorio. Home Depot dice haber sido menos promocional y haber usado parte de ese presupuesto para sostener sus precios, y cree estar acelerando sus ganancias de cuota. Ambas prevén precios del 2S similares a los del 1S."
    ],
    "bullets": [
     {
      "e": "HD",
      "t": "Arranque del 3T coherente con el 2T; reanudación de recompras hacia el final del 2T fiscal de 2027, con deuda/EBITDA hacia 2x. Sin pronunciarse sobre márgenes de 2027 por una votación legislativa pendiente sobre aranceles."
     },
     {
      "e": "LOW",
      "t": "Cliente con renta media superior a 100.000 $ y equity medio de ≈400.000 $; más costes de transporte en el 2S; investor day en diciembre."
     },
     {
      "e": "SHW",
      "t": "Guía del 3T: ventas +dígito medio a alto; subida del 8% en vigor desde el 1-sep; presentación a inversores el 24-sep."
     }
    ]
   },
   "macroIntro": "Home Improvement describe a un propietario con capacidad de gasto pero **cauto: repara y mantiene, pospone los grandes proyectos** y sigue atado a una rotación de vivienda en mínimos. A ello se suma un repunte de costes de energía y materias primas.",
   "macro": [
    {
     "tema": "Vivienda existente",
     "texto": "Rotación en ≈3% del parque, mínimos de cuatro años, sin señal de inflexión. El repintado residencial crece a dígito medio: se invierte en la vivienda que se tiene, no en cambiar de casa.",
     "vs": "Frente al 1T: sin cambios."
    },
    {
     "tema": "Tipos y asequibilidad",
     "texto": "La asequibilidad (tipos, precio, seguros, impuestos) es la principal preocupación según Lowe's. La reciente subida de tipos no ha añadido volatilidad visible, pero frena la obra nueva y el proyecto financiado.",
     "vs": "Frente al 1T: más presión por la subida de tipos, sin efecto aún en la demanda."
    },
    {
     "tema": "Gasto en reformas",
     "texto": "Proyectos más pequeños, de reparación y mantenimiento; carteras de los pros estables. Big-ticket positivo solo en compras no financiadas.",
     "vs": "Frente al 1T: estable, con algo más de ticket."
    },
    {
     "tema": "Consumo duradero y discrecional",
     "texto": "Economía en K: clientes premium y clientes que buscan precio conviven en el canal online; el DIY sensible al precio sigue presionado y la gasolina cara pesa en el presupuesto.",
     "vs": "Frente al 1T: mayor peso de la energía en la cautela del consumidor."
    },
    {
     "tema": "Aranceles y precios",
     "texto": "Las devoluciones IEEPA elevan los márgenes del 2T y financiaron promociones de la competencia en julio. Home Depot cita nuevos aranceles no previstos.",
     "vs": "Frente al 1T: el arancel pasa de coste a devolución puntual; la incertidumbre regulatoria persiste."
    },
    {
     "tema": "Materias primas y petróleo",
     "texto": "Combustible, energía, resinas, metales, logística y envases presionan costes; Sherwin-Williams prevé materias primas +dígito alto en el 2S. Solo la construcción ligada a centros de datos e industria muestra demanda sólida.",
     "vs": "Frente al 1T: nuevo foco de presión."
    }
   ],
   "vigilar": [
    "Si las transacciones vuelven a terreno positivo o el crecimiento sigue dependiendo del ticket.",
    "Comparables de Lowe's en el 3T y normalización de las promociones financiadas con devoluciones arancelarias.",
    "Margen bruto sin devoluciones IEEPA: 4T plano en Home Depot y votación legislativa sobre aranceles.",
    "Traslado de la inflación de materias primas: realización de la subida del 8% de Sherwin-Williams y combustible en el 2S.",
    "Big-ticket financiado y rotación de vivienda tras la subida de tipos.",
    "Obra residencial nueva frente a no residencial ligada a la IA (SRS, FBM/ADG, Protective & Marine).",
    "Mensajes de la presentación a inversores de Sherwin-Williams (24-sep) y del investor day de Lowe's (diciembre)."
   ],
   "proximo": "Próximos resultados: 3T 2026. Sherwin-Williams (jul–sep), hacia finales de octubre; Home Depot y Lowe's (3T fiscal, ago–oct), hacia mediados de noviembre.",
   "cobertura": [
    {
     "empresa": "Home Depot",
     "fiscal": "2T FY2026",
     "meses": "may–jul",
     "publicado": "18-ago-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/354950/000035495026000145/hd_exhibit991x08022026.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/354950/000162828026058715/hd-20260802.htm"
      },
      {
       "t": "Call 18-ago y conferencia 15-sep"
      }
     ]
    },
    {
     "empresa": "Lowe's",
     "fiscal": "2T FY2026",
     "meses": "may–jul",
     "publicado": "19-ago-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/60667/000006066726000113/exhibit991-07312026.htm"
      },
      {
       "t": "Infografía",
       "url": "https://www.sec.gov/Archives/edgar/data/60667/000006066726000113/exhibit992-081926.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/60667/000006066726000117/low-20260731.htm"
      },
      {
       "t": "Call 19-ago y conferencia 15-sep"
      }
     ]
    },
    {
     "empresa": "Sherwin-Williams",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "28-jul-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/89800/000008980026000046/shwearningsrelease2q2026.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/89800/000008980026000049/shw-20260630.htm"
      },
      {
       "t": "Call 28-jul"
      }
     ]
    }
   ],
   "metodo": "Trimestre natural: cada compañía se asigna al trimestre natural con el que comparte más días de su periodo fiscal. Home Depot (cierre 2-ago) y Lowe's (31-jul) cubren may–jul y entran en el 2T; Sherwin-Williams coincide con abr–jun. Comparables mensuales por mes fiscal. Referencias del 1T según el informe anterior del monitor; lo marcado como calculado es cálculo propio. Las devoluciones IEEPA no se excluyen de las cifras ajustadas. La conferencia del 15 de septiembre se refiere al trimestre en curso y se presenta por separado.",
   "glosario": [
    {
     "t": "Comparables (comps)",
     "d": "Ventas de tiendas y canales abiertos más de un año; miden el crecimiento orgánico."
    },
    {
     "t": "Transacciones / ticket medio",
     "d": "Número de compras e importe medio por compra; su combinación explica las comparables."
    },
    {
     "t": "Big-ticket",
     "d": "Compras de importe elevado (más de 1.000 $ en Home Depot), asociadas a grandes proyectos."
    },
    {
     "t": "Pro / DIY / DIFM",
     "d": "Cliente profesional, particular que hace la obra él mismo y particular que la encarga (servicios de instalación)."
    },
    {
     "t": "Devoluciones IEEPA",
     "d": "Reembolsos de aranceles impuestos bajo la ley IEEPA, invalidados por el Supremo en febrero de 2026."
    },
    {
     "t": "Rotación de vivienda",
     "d": "Porcentaje del parque de viviendas que cambia de propietario cada año."
    },
    {
     "t": "Repintado residencial",
     "d": "Pintura de viviendas ya existentes, frente a la de obra nueva."
    },
    {
     "t": "PSG",
     "d": "Paint Stores Group: red de tiendas propias de Sherwin-Williams, orientada al pintor profesional."
    }
   ]
  }
 ],
 "luxury": [
  {
   "sector": "luxury",
   "trimestre": "2026-2T",
   "sectorNombre": "Lujo",
   "label": "2T 2026",
   "labelAnterior": "1T 2026",
   "meses": "abr–jun 2026",
   "publicado": "18-sep-2026",
   "empresas": [
    {
     "id": "MC",
     "nombre": "LVMH"
    },
    {
     "id": "RMS",
     "nombre": "Hermès"
    },
    {
     "id": "CFR",
     "nombre": "Richemont"
    }
   ],
   "titulo": "El lujo acelera de la mano de EE.UU. y la joyería, mientras China se estabiliza sin recuperarse y el cliente aspiracional sigue sin volver",
   "tarjeta": "El lujo acelera con EE.UU. y la joyería; China se estabiliza sin recuperarse y el cliente aspiracional no vuelve",
   "drivers": "crecimiento orgánico · EE.UU. y efecto riqueza · China · turismo · joyería frente a moda · precios · divisa · Oriente Medio",
   "pregunta": {
    "q": "¿Es la mejora del 2T el inicio de una recuperación amplia del lujo o un crecimiento todavía concentrado?",
    "a": "Los tres grupos aceleran (LVMH +3% orgánico, Hermès +7% y Richemont +20% a tipo constante), pero el impulso se concentra en EE.UU., Japón y la joyería. El gasto de los clientes chinos no crece, Oriente Medio sigue restando y la moda de LVMH apenas vuelve a terreno positivo, con volumen y mix planos. Es una mejora real, pero selectiva."
   },
   "takeaways": [
    {
     "lead": "El crecimiento acelera en los tres grupos.",
     "texto": "LVMH pasa a +3% orgánico en el 2T (≈+4% sin Oriente Medio), dos puntos más que en el 1T; Hermès crece un 7% a tipo constante, *slightly accelerating* frente al 1T; Richemont vende 6.329 M€ en su 1T fiscal, +20% a tipo constante y +17% a tipo corriente."
    },
    {
     "lead": "EE.UU. es el principal motor del sector.",
     "texto": "LVMH crece un 6% en EE.UU. en el 2T, con demanda local y turística al alza y clientes estadounidenses creciendo a un dígito alto en Moda y Marroquinería. Richemont avanza un 27% en Américas con aceleración secuencial, y Hermès un 15% en el semestre sin cambio de tendencia."
    },
    {
     "lead": "La joyería sigue muy por delante de la moda.",
     "texto": "La Joyería de Richemont crece un 24% (séptimo trimestre seguido de doble dígito) y Relojería y Joyería de LVMH, a doble dígito, con Tiffany y Bvlgari en *mid-teens*. Moda y Marroquinería de LVMH vuelve a crecer, pero solo un 1%, con precio moderado y volumen/mix plano."
    },
    {
     "lead": "China se estabiliza, pero no se recupera.",
     "texto": "LVMH describe un gasto de clientes asiáticos y chinos sin cambios frente al 1T, desplazado de Asia hacia Europa y Japón; Hermès ve China estabilizada sin mejora. Richemont es la excepción parcial: China, Hong Kong y Macao crecen a doble dígito, apoyados en Hong Kong y Macao, mientras su relojería cae en esa zona."
    },
    {
     "lead": "La divisa recorta márgenes y la disciplina de costes compensa.",
     "texto": "El margen operativo del 1S de LVMH queda en el 22,5% con ≈70 pb de impacto divisa y gastos de marketing y venta −2%; el de Hermès, en el 41%, con −1 pt por divisa. Richemont no publica márgenes en su 1T fiscal, pero cita costes de materias primas elevados."
    }
   ],
   "cambios": [
    {
     "kpi": "Crecimiento del sector",
     "dir": "Acelera",
     "texto": "LVMH pasa de +1% orgánico en el 1T a +3% en el 2T; Hermès, de +6% a +7% a tipo constante; Richemont, de +13% en su 4T fiscal (ene–mar) a +20% en abr–jun."
    },
    {
     "kpi": "Moda y marroquinería (LVMH)",
     "dir": "Vuelve a crecer",
     "texto": "De −2% orgánico en el 1T a +1% en el 2T (+2% sin Oriente Medio), con volumen/mix plano y precio moderado."
    },
    {
     "kpi": "Joyería",
     "dir": "Acelera",
     "texto": "Relojería y Joyería de LVMH pasa de +7% orgánico en el 1T a doble dígito en el 2T; la Joyería de Richemont, de +16% en ene–mar a +24% en abr–jun."
    },
    {
     "kpi": "EE.UU. y Américas",
     "dir": "Mejora",
     "texto": "LVMH EE.UU. de +3% a +6%; Richemont Américas de +18% a +27%. Hermès mantiene la tendencia (+17% en el 1T; +15% en el 1S)."
    },
    {
     "kpi": "Japón y Europa",
     "dir": "Mejoran",
     "texto": "LVMH Japón pasa de −3% en el 1T a mejora secuencial (1S +5%) y Europa mejora por el turista asiático. Hermès Francia, de −3% en el 1T a +2% en el 1S; Richemont Japón, de +28% a +36%."
    },
    {
     "kpi": "Asia excl. Japón",
     "dir": "Se frena en LVMH",
     "texto": "LVMH pasa de +7% en el 1T a una desaceleración secuencial en el 2T, única región que empeora; Hermès se mantiene en +2% (1S). Richemont Asia-Pacífico crece un 21%, frente a +14% en ene–mar."
    },
    {
     "kpi": "Oriente Medio",
     "dir": "Sin cambios",
     "texto": "Resta ≈1 pt a LVMH y 1,5 pp a Hermès, igual que en el 1T. LVMH sale del trimestre con un impacto *much more muted*; Richemont Oriente Medio y África crece un 3%."
    }
   ],
   "seguimiento": [
    {
     "kpi": "China: de estabilización a aceleración",
     "dir": "No se produce",
     "texto": "LVMH: gasto de clientes asiáticos y chinos sin cambios frente al 1T. Hermès: estabilizada, sin mejora y con más ahorro. Richemont: China, Hong Kong y Macao a doble dígito, sobre todo en joyería."
    },
    {
     "kpi": "Consumidor aspiracional frente a ultra-lujo",
     "dir": "La brecha persiste",
     "texto": "Hermès ve a la clientela aspiracional sufriendo más que la de alto patrimonio, con los oficios de volumen creciendo menos. LVMH responde con producto de lista de espera y formas de entrada."
    },
    {
     "kpi": "Joyería frente a moda y marroquinería",
     "dir": "La brecha se mantiene",
     "texto": "Joyería de Richemont +24% y de LVMH a doble dígito, frente a Moda y Marroquinería de LVMH +1%. La marroquinería de Hermès, en cambio, crece un 10% en el 1S."
    },
    {
     "kpi": "Consumidor estadounidense y efecto riqueza",
     "dir": "Se refuerza",
     "texto": "EE.UU. +6% en LVMH, Américas +27% en Richemont y +15% en Hermès. LVMH vincula la demanda a la creación de riqueza, con EE.UU. y Corea como ejemplos."
    },
    {
     "kpi": "Turismo, Oriente Medio y travel retail",
     "dir": "Mejora parcial",
     "texto": "El turismo vuelve a EE.UU. (*the trend has reversed in the second quarter*, según LVMH), Europa y Japón. Oriente Medio resta lo mismo que en el 1T. El travel retail mejora en Hermès, pero sigue lastrando la cosmética de LVMH."
    },
    {
     "kpi": "Presión de la divisa",
     "dir": "Persiste",
     "texto": "LVMH: −5% en ventas del 1S y casi 700 M€ en el beneficio de operaciones recurrentes. Hermès: −360 M€ en ventas y ≈−200 M€ en resultado operativo. Richemont: Japón +36% a tipo constante y +20% a tipo corriente."
    },
    {
     "kpi": "Mayorista frente a retail propio",
     "dir": "El retail sigue por delante",
     "texto": "Richemont: retail +24% y mayorista +9%. Hermès: mayorista *slightly decreasing*, con mejora del travel retail en el 2T y concesiones de Oriente Medio penalizadas."
    }
   ],
   "scorecard": [
    {
     "titulo": "Resultados",
     "filas": [
      {
       "kpi": "Ventas del trimestre",
       "nota": "abr–jun 2026",
       "v": {
        "MC": {
         "v": "N/D",
         "c": "No disponible en el call; 1S: 38.600 M€"
        },
        "RMS": {
         "v": "4.100 M€",
         "c": "1S: 8.200 M€"
        },
        "CFR": {
         "v": "6.329 M€",
         "c": "1T FY26: 5.412 M€"
        }
       }
      },
      {
       "kpi": "Crecimiento del trimestre",
       "nota": "orgánico / tipo constante",
       "v": {
        "MC": {
         "v": "+3% orgánico",
         "c": "+2 pts frente al 1T; ≈+4% sin Oriente Medio"
        },
        "RMS": {
         "v": "+7% tipo constante",
         "c": "Ligera aceleración frente al 1T; tipo corriente N/D"
        },
        "CFR": {
         "v": "+20% tipo constante",
         "c": "+17% a tipo corriente"
        }
       }
      },
      {
       "kpi": "Crecimiento del 1S",
       "nota": "ene–jun 2026",
       "v": {
        "MC": {
         "v": "+2% orgánico · −3% reportado",
         "c": "Divisa −5%; perímetro −1% (DFS)"
        },
        "RMS": {
         "v": "+6% tipo constante · +2% corriente",
         "c": "Divisa −360 M€ (−4,5 pts)"
        },
        "CFR": {
         "v": "N/D",
         "c": "Ejercicio a marzo; semestre abr–sep el 13-nov"
        }
       }
      },
      {
       "kpi": "Margen operativo 1S",
       "v": {
        "MC": {
         "v": "22,5%",
         "c": "PRO 8.700 M€; ≈70 pb de impacto divisa"
        },
        "RMS": {
         "v": "41%",
         "c": "3.400 M€; −1 pt por divisa, cerca del 1S25"
        },
        "CFR": {
         "v": "N/D",
         "c": "No se publica en el 1T fiscal"
        }
       }
      },
      {
       "kpi": "Beneficio neto 1S",
       "nota": "parte del grupo",
       "v": {
        "MC": {
         "v": "5.700 M€",
         "c": "En línea con el 1S25"
        },
        "RMS": {
         "v": "2.200 M€",
         "c": "Estable; 2.500 M€ sin la contribución excepcional"
        },
        "CFR": {
         "v": "N/D",
         "c": "No se publica en el 1T fiscal"
        }
       }
      }
     ]
    },
    {
     "titulo": "Indicadores sectoriales",
     "filas": [
      {
       "kpi": "EE.UU. / Américas",
       "v": {
        "MC": {
         "v": "EE.UU. +6% (2T)",
         "c": "1S: +4%"
        },
        "RMS": {
         "v": "América +15% (1S)",
         "c": "En línea con el 1T"
        },
        "CFR": {
         "v": "Américas +27%",
         "c": "Aceleración secuencial; demanda local"
        }
       }
      },
      {
       "kpi": "Japón",
       "v": {
        "MC": {
         "v": "Mejora secuencial (2T)",
         "c": "1S: +5%"
        },
        "RMS": {
         "v": "+11% (1S)",
         "c": "Aceleración en el 2T"
        },
        "CFR": {
         "v": "+36%",
         "c": "+20% a tipo corriente; −15% un año antes"
        }
       }
      },
      {
       "kpi": "Asia excl. Japón / China",
       "v": {
        "MC": {
         "v": "Desaceleración (2T)",
         "c": "1S Asia +6%; gasto chino plano frente al 1T"
        },
        "RMS": {
         "v": "+2% (1S)",
         "c": "Gran China aún crece en el 2T; Corea fuerte"
        },
        "CFR": {
         "v": "Asia-Pacífico +21%",
         "c": "China, Hong Kong y Macao, doble dígito"
        }
       }
      },
      {
       "kpi": "Europa",
       "v": {
        "MC": {
         "v": "Mejora secuencial (2T)",
         "c": "1S: −1% por turismo débil"
        },
        "RMS": {
         "v": "Excl. Francia +9% · Francia +2% (1S)",
         "c": "Buen 2T en Francia"
        },
        "CFR": {
         "v": "+11%",
         "c": "Turistas norteamericanos y de Oriente Medio"
        }
       }
      },
      {
       "kpi": "Oriente Medio",
       "v": {
        "MC": {
         "v": "≈−1 pt al grupo",
         "c": "Igual que en el 1T; salida más suave"
        },
        "RMS": {
         "v": "−1,5 pp al grupo",
         "c": "Igual que en el 1T; Otros −4% (1S)"
        },
        "CFR": {
         "v": "Oriente Medio y África +3%",
         "c": "+1% a tipo corriente; EAU ligeramente a la baja"
        }
       }
      },
      {
       "kpi": "Joyería y relojería",
       "v": {
        "MC": {
         "v": "Doble dígito (2T)",
         "c": "Tiffany y Bvlgari mid-teens; relojes, algo negativos"
        },
        "RMS": {
         "v": "Relojería estable (1S)",
         "c": "Buen progreso en el 2T; joyería y Hogar +5%"
        },
        "CFR": {
         "v": "Joyería +24% · Relojería +8%",
         "c": "Séptimo trimestre de doble dígito en Joyería"
        }
       }
      },
      {
       "kpi": "Moda y marroquinería",
       "v": {
        "MC": {
         "v": "+1% (2T)",
         "c": "+2% sin Oriente Medio; 1S: −1%"
        },
        "RMS": {
         "v": "Marroquinería +10% (1S)",
         "c": "Acelera en el 2T; demanda superior a la producción"
        },
        "CFR": {
         "v": "Otros (incl. moda) +9%",
         "c": "Peter Millar y Gianvito Rossi, doble dígito"
        }
       }
      },
      {
       "kpi": "Canales",
       "v": {
        "MC": {
         "v": "N/D",
         "c": "Travel retail aún lastra Perfumes y Cosméticos"
        },
        "RMS": {
         "v": "Mayorista, ligera caída",
         "c": "Travel retail mejora en el 2T"
        },
        "CFR": {
         "v": "Retail +24% · mayorista +9%",
         "c": "Retail, 71% de las ventas; online +18%"
        }
       }
      },
      {
       "kpi": "Precios",
       "v": {
        "MC": {
         "v": "Moderados (F&LG, 2T)",
         "c": "Volumen/mix plano"
        },
        "RMS": {
         "v": "Subida 2027 algo menor",
         "c": "Que la aplicada en 2026 (importe no dado)"
        },
        "CFR": {
         "v": "N/D",
         "c": "Cita materias primas elevadas"
        }
       }
      }
     ]
    }
   ],
   "scorecardNota": "LVMH publica crecimiento orgánico; Hermès y Richemont, a tipo constante. LVMH y Hermès solo publican beneficio y márgenes semestrales (1S); Richemont solo publica ventas en su 1T fiscal. Los desgloses de Hermès son del 1S; los de LVMH, del 2T salvo indicación. Margen operativo: PRO en LVMH y resultado operativo recurrente en Hermès.",
   "companias": [
    {
     "e": "MC",
     "nombre": "LVMH",
     "titular": "La moda vuelve a crecer; el margen se sostiene con disciplina de costes",
     "texto": "Orgánico +3% en el 2T, con aceleración en las tres mayores divisiones y EE.UU. +6%. Margen operativo del 1S del 22,5% pese a ≈70 pb de divisa, con gastos de marketing y venta −2%. Sin guidance de grupo: espera un impacto divisa similar en márgenes en el 2S y sitúa el apalancamiento operativo a partir de un crecimiento del 3–4%. Partidas a vigilar: revalorización de la cartera financiera (sin caja), sobretasa fiscal francesa y venta de DFS."
    },
    {
     "e": "RMS",
     "nombre": "Hermès",
     "titular": "+7% en el 2T, con la demanda de bolsos por encima de la producción",
     "texto": "Crecimiento del 7% a tipo constante pese a restar 1,5 pp por Oriente Medio; margen bruto del 71,1% (+0,4 pts) y flujo de caja libre ajustado de 2.200 M€ (+18%). No recurrente: contribución excepcional francesa de ≈270 M€ en el 1S; sin ella, beneficio neto de 2.500 M€. Reitera su objetivo de medio plazo y anticipa una subida de precios en 2027 algo menor que la de 2026."
    },
    {
     "e": "CFR",
     "nombre": "Richemont",
     "titular": "+20% a tipo constante, liderado por Joyería y Américas",
     "texto": "Solo publica ventas: 6.329 M€ en su 1T fiscal, con Joyería +24% y Relojería especializada +8% (*notable sequential improvement*). Retail +24% frente a mayorista +9%. Caja neta de 9.100 M€, que incluye 400 M€ de la venta de su participación en Avolta. Sin perspectivas cuantitativas; menciona costes de materias primas elevados."
    }
   ],
   "exhibits": [
    {
     "titulo": "Los tres grupos crecen en abr–jun, con Richemont muy por delante gracias a la joyería",
     "sub": "Crecimiento de ventas del 2T 2026 (abr–jun), %. LVMH: orgánico; Hermès y Richemont: tipo constante",
     "tipo": "bar",
     "unidad": "%",
     "dec": 0,
     "trimestres": [
      "2T26"
     ],
     "series": {
      "MC": [
       3
      ],
      "RMS": [
       7
      ],
      "CFR": [
       20
      ]
     },
     "fuente": "call de resultados del 1S de LVMH (27-jul) y Hermès (29-jul); comunicado de ventas del 1T FY27 de Richemont (15-jul)."
    },
    {
     "titulo": "Richemont crece en todas las regiones; Oriente Medio y África es la única casi plana",
     "sub": "Richemont: ventas del 1T FY27 (abr–jun 2026) por región, variación a tipo constante, %",
     "tipo": "bar",
     "unidad": "%",
     "dec": 0,
     "trimestres": [
      "Europa",
      "Asia-Pacífico",
      "Américas",
      "Japón",
      "O. Medio y África"
     ],
     "series": {
      "CFR": [
       11,
       21,
       27,
       36,
       3
      ]
     },
     "fuente": "comunicado de ventas del 1T FY27 de Richemont."
    },
    {
     "titulo": "Hermès: América y Japón tiran; Asia excl. Japón y Francia crecen poco",
     "sub": "Hermès: ventas del 1S 2026 (ene–jun) por región, variación a tipo constante, %",
     "tipo": "bar",
     "unidad": "%",
     "dec": 0,
     "trimestres": [
      "Europa excl. Francia",
      "Francia",
      "Japón",
      "Asia excl. Japón",
      "América",
      "Otros (O. Medio)"
     ],
     "series": {
      "RMS": [
       9,
       2,
       11,
       2,
       15,
       -4
      ]
     },
     "fuente": "call de resultados del 1S de Hermès."
    },
    {
     "titulo": "LVMH: Relojería y Joyería lidera el semestre y Moda y Marroquinería sigue en negativo",
     "sub": "LVMH: ventas del 1S 2026 (ene–jun) por división, crecimiento orgánico, %. Perfumes y Cosméticos: estable (no se muestra)",
     "tipo": "bar",
     "unidad": "%",
     "dec": 0,
     "trimestres": [
      "Vinos y Espirituosos",
      "Moda y Marroquinería",
      "Relojería y Joyería",
      "Distribución selectiva"
     ],
     "series": {
      "MC": [
       5,
       -1,
       9,
       5
      ]
     },
     "fuente": "call de resultados del 1S de LVMH."
    }
   ],
   "temas": [
    {
     "titulo": "EE.UU. y el efecto riqueza sostienen el crecimiento del sector",
     "parrafos": [
      "Las tres compañías sitúan a EE.UU. como su mercado más dinámico. LVMH crece un 6% en el 2T, con aceleración de la demanda local y de la turística, y los clientes estadounidenses explican el grueso del crecimiento de Moda y Marroquinería. Richemont avanza un 27% en Américas con aceleración secuencial y Hermès, un 15% en el semestre sin cambio de tendencia.",
      "LVMH vincula la demanda a la creación de riqueza (*where wealth is created, consumer appetite for luxury… is strong*), con EE.UU. y Corea como ejemplos. La lectura es consistente con un **consumidor de alto patrimonio apoyado en activos financieros**, más que con una mejora amplia de la renta: el propio sector admite que la clase media aspiracional sigue más débil."
     ],
     "evidencias": [
      {
       "e": "MC",
       "t": "En el 1T el turismo hacia EE.UU. aún sufría por el tipo de cambio; en el 2T la tendencia se invierte."
      },
      {
       "e": "RMS",
       "t": "América +15% en el 1S, en línea con el 1T; refuerzo comercial en EE.UU., Japón y Corea."
      },
      {
       "e": "CFR",
       "t": "Américas: 1.670 M€, crecimiento en todos los mercados, canales y divisiones, con Joyería y Relojería al frente."
      }
     ]
    },
    {
     "titulo": "Joyería por delante de la moda: el gasto se inclina hacia el producto icónico y el alto patrimonio",
     "parrafos": [
      "La divergencia por categorías se mantiene. La Joyería de Richemont (4.732 M€; 74,8% del grupo, calculado) crece un 24% y encadena siete trimestres de doble dígito; en LVMH, Relojería y Joyería crece a doble dígito en el 2T, con Tiffany y Bvlgari creciendo *mid-teens*. Moda y Marroquinería de LVMH vuelve a crecer, pero solo un 1%, con precio moderado y volumen/mix plano.",
      "Dentro de Hermès se repite el patrón: la joyería y el prêt-à-porter funcionan mejor y los oficios de «volumen» (zapatos, seda) crecen menos, según Dumas, que ve a la clientela aspiracional *suffering more*. Los datos **apuntan a una polarización por nivel de renta** más que a un problema de categoría: la marroquinería de Hermès, de máxima exclusividad, crece un 10% en el semestre y vende todo lo que produce."
     ],
     "evidencias": [
      {
       "e": "MC",
       "t": "Estrategia de *nourish the pyramids*: producto muy exclusivo con lista de espera y formas de entrada para el cliente aspiracional."
      },
      {
       "e": "RMS",
       "t": "Marroquinería +10% en el 1S con aceleración en el 2T; demanda de bolsos muy superior a la producción."
      },
      {
       "e": "CFR",
       "t": "Relojería especializada +8% con mejora secuencial notable (Vacheron Constantin, Jaeger-LeCoultre, A. Lange & Söhne)."
      }
     ]
    },
    {
     "titulo": "China: estabilidad sin recuperación; el cliente chino cambia dónde compra, no cuánto",
     "parrafos": [
      "LVMH describe un gasto de clientes asiáticos y chinos sin cambios frente al 1T: en el 2T gastaron menos en Asia y más en Europa y Japón, y Asia excl. Japón es la única región que se desacelera. La demanda china local y turística queda plana en el semestre. Hermès ve una situación estabilizada, sin mejora, con los hogares ahorrando más y el consumo ligado al inmobiliario y la bolsa.",
      "Richemont ofrece la señal más positiva: China, Hong Kong y Macao crecen a doble dígito en conjunto, con fuerza en Hong Kong y Macao, aunque su relojería cae en esa zona. Es **consistente con un consumidor chino que se concentra en joyería** y en puntos de compra concretos, sin que haya aún una recuperación de base."
     ],
     "evidencias": [
      {
       "e": "MC",
       "t": "Consumo local chino *high by historical standard*, cada vez más concentrado en eventos de compra."
      },
      {
       "e": "RMS",
       "t": "Asia excl. Japón +2% en el 1S; en China los avances vienen de joyería, perfumes y seda, más por fidelidad que por tráfico."
      },
      {
       "e": "CFR",
       "t": "Asia-Pacífico +21% (2.068 M€), liderada por Joyería; Corea del Sur y Taiwán destacan."
      }
     ]
    },
    {
     "titulo": "Márgenes: la divisa resta y la disciplina de costes compensa",
     "parrafos": [
      "El euro fuerte sigue pesando en el semestre. LVMH pierde un 5% de ventas por divisa y casi 700 M€ de beneficio de operaciones recurrentes, con un margen del 22,5%; a tipo constante habla de margen estable gracias a la disciplina de costes. Hermès pierde 360 M€ de ventas y ≈200 M€ de resultado operativo, y mantiene un margen del 41%, cerca del año anterior.",
      "La calidad del margen difiere. En Hermès el margen bruto sube 0,4 pts (71,1%) por un *sell-through* excepcional e inventario óptimo; en LVMH, Moda y Marroquinería pierde 60 pb de margen, que la compañía atribuye más que íntegramente a la divisa. Richemont no publica márgenes, pero su mención a materias primas elevadas **podría anticipar presión** en su semestre."
     ],
     "evidencias": [
      {
       "e": "MC",
       "t": "Margen bruto 67,1% (+30 pb); espera en el 2S un impacto divisa en márgenes similar al del 1S (≈70 pb)."
      },
      {
       "e": "RMS",
       "t": "Otros gastos de venta y administración +4%; contribución excepcional francesa estimada en ≈360 M€ en 2026."
      },
      {
       "e": "CFR",
       "t": "Ventas +20% a tipo constante y +17% a tipo corriente; en Japón, +36% frente a +20%."
      }
     ]
    }
   ],
   "citas": [
    {
     "texto": "Asian clientele did spend less in Q2 in Asia and more in Europe and in Japan",
     "quien": "Cécile Cabanis, CFO",
     "contexto": "LVMH, call del 1S26"
    },
    {
     "texto": "I see a situation that has stabilized in China, but I do not see an improvement",
     "quien": "Axel Dumas, CEO",
     "contexto": "Hermès, call del 1S26"
    },
    {
     "texto": "robust local demand more than offset the significant drop in tourist spending owing to the conflict in the region",
     "quien": "Comunicado de ventas",
     "contexto": "Richemont, 1T FY27 (Oriente Medio y África)"
    }
   ],
   "pulso": {
    "etiqueta": "Después del trimestre · comentarios sobre julio en los calls del 1S",
    "titulo": "Sin cambio de tendencia en julio, con Francia y Oriente Medio como incógnitas",
    "parrafos": [
     "Las referencias al 3T son escasas. Hermès no observa cambios de tendencia en América, Japón, Corea y Europa, mantiene como incógnitas Francia y Oriente Medio, y su evento de alta joyería de julio superó sus expectativas. LVMH declina comentar el 2S (*July is a small month*). Richemont no ha publicado ventas posteriores; su semestre (abr–sep) se conocerá el 13 de noviembre."
    ],
    "bullets": [
     {
      "e": "RMS",
      "t": "Aperturas en julio en Chicago, Brooklyn, Río de Janeiro, Chengdu y Ginebra; inversiones de ≈1.000 M€ en 2026, aceleradas en el 2S."
     }
    ]
   },
   "macroIntro": "El lujo describe un **consumo de alta renta sólido pero concentrado**: crece donde se crea riqueza (EE.UU., Japón, Corea), se estanca en China y en el cliente aspiracional, y sigue expuesto a la divisa y a la geopolítica.",
   "macro": [
    {
     "tema": "Consumo de alta renta",
     "texto": "El cliente de alto patrimonio sigue gastando en producto exclusivo; el aspiracional sufre más.",
     "vs": "Frente al 1T: la polarización persiste, con algo más de crecimiento en la parte alta."
    },
    {
     "tema": "EE.UU.",
     "texto": "Principal motor: LVMH +6%, Richemont Américas +27%, Hermès +15% (1S). Demanda local y turística al alza.",
     "vs": "Frente al 1T: acelera en LVMH y Richemont; estable en Hermès."
    },
    {
     "tema": "China",
     "texto": "Gasto chino plano y desplazado a Europa y Japón; más ahorro de los hogares. Hong Kong y Macao, fuertes en joyería (Richemont).",
     "vs": "Frente al 1T: estabilización sin aceleración."
    },
    {
     "tema": "Turismo",
     "texto": "Mejora en EE.UU., Europa y Japón. El travel retail mejora en Hermès pero sigue lastrando la cosmética de LVMH.",
     "vs": "Frente al 1T: mejora, tras un 1T con turismo débil en Europa."
    },
    {
     "tema": "Oriente Medio",
     "texto": "El conflicto resta ≈1 pt a LVMH y 1,5 pp a Hermès; en Richemont, la demanda local compensa la caída del turismo y EAU cae ligeramente.",
     "vs": "Frente al 1T: mismo impacto, con salida del trimestre más suave en LVMH."
    },
    {
     "tema": "Divisa",
     "texto": "El euro fuerte resta un 5% de ventas a LVMH y 4,5 pts a Hermès en el 1S; el yen amplía la brecha entre tipo constante y corriente en Japón.",
     "vs": "Frente al 1T: sigue siendo el principal lastre de las cifras reportadas."
    },
    {
     "tema": "Europa y Francia",
     "texto": "Europa mejora en el 2T por el turista asiático, pero Dumas se declara *slightly concerned* por Francia: los clientes franceses compran con una cesta más pequeña.",
     "vs": "Frente al 1T: mejora del turismo, con dudas sobre el consumo local francés."
    }
   ],
   "vigilar": [
    "Si EE.UU. mantiene el ritmo en el 2S (LVMH +6%, Richemont Américas +27%) y su dependencia del efecto riqueza.",
    "China: si el gasto de clientes chinos pasa de plano a creciente y si la relojería se estabiliza en China, Hong Kong y Macao.",
    "Moda y Marroquinería de LVMH: si consolida el crecimiento y el grupo alcanza el 3–4% que, según la compañía, activa el apalancamiento operativo.",
    "Oriente Medio: si la mejora gradual con la que LVMH salió de junio se confirma y cómo evolucionan EAU y las concesiones del Golfo.",
    "Precios y costes: la subida de precios de 2027 de Hermès, algo menor que la de 2026, y el efecto de las materias primas en el semestre de Richemont.",
    "Divisa en márgenes: ≈70 pb previstos en el 2S por LVMH y efecto conversión cercano a cero en el año para Hermès.",
    "Consumo local en Francia y Europa, tras la preocupación expresada por Hermès."
   ],
   "proximo": "Próximos datos: ventas del 3T de LVMH (mediados de octubre) y Hermès (finales de octubre); resultados semestrales de Richemont (abr–sep) el 13-nov-2026.",
   "cobertura": [
    {
     "empresa": "LVMH",
     "fiscal": "2T 2026 (ventas) · 1S 2026 (resultados)",
     "meses": "abr–jun (ventas) · ene–jun (resultados)",
     "publicado": "27-jul-2026",
     "docs": [
      {
       "t": "Call de resultados del 1S, 27-jul"
      },
      {
       "t": "Web de inversores",
       "url": "https://www.lvmh.com/en/investors"
      }
     ]
    },
    {
     "empresa": "Hermès",
     "fiscal": "2T 2026 (ventas) · 1S 2026 (resultados)",
     "meses": "abr–jun (ventas) · ene–jun (resultados)",
     "publicado": "29-jul-2026",
     "docs": [
      {
       "t": "Call de resultados del 1S, 29-jul"
      },
      {
       "t": "Web de inversores",
       "url": "https://finance.hermes.com/en/"
      }
     ]
    },
    {
     "empresa": "Richemont",
     "fiscal": "1T FY27 (ejercicio a 31-mar)",
     "meses": "abr–jun",
     "publicado": "15-jul-2026",
     "docs": [
      {
       "t": "Comunicado de ventas del 1T FY27",
       "url": "https://www.richemont.com/news-media/press-releases-news/richemont-posts-strong-start-to-the-year-with-sales-up-by-20-at-constant-rates-for-its-first-quarter-ended-30-june-2026/"
      },
      {
       "t": "Web de inversores",
       "url": "https://www.richemont.com/investors/"
      }
     ]
    }
   ],
   "metodo": "Trimestre natural: cada compañía se asigna al trimestre natural con el que comparte más días de su periodo fiscal. LVMH y Hermès entran con las ventas del 2T (abr–jun) y con sus resultados semestrales, etiquetados 1S (ene–jun); Richemont, con las ventas de su 1T fiscal FY27 (abr–jun), sin beneficio ni márgenes. LVMH y Hermès: transcript del call, sin comunicado ni presentación, por lo que faltan cifras del 2T por región y división; el call de Hermès está en parte interpretado del francés. Richemont: comunicado de ventas. Las referencias al 1T proceden del informe anterior. No se calculan variaciones no publicadas.",
   "glosario": [
    {
     "t": "Crecimiento orgánico",
     "d": "Variación de ventas sin efecto divisa ni cambios de perímetro (métrica de LVMH)."
    },
    {
     "t": "Tipo de cambio constante",
     "d": "Variación de ventas con los tipos del año anterior; separa demanda de efecto divisa (Hermès, Richemont)."
    },
    {
     "t": "Efecto divisa",
     "d": "Impacto de los tipos de cambio en ventas y márgenes, por conversión de cifras y por coberturas."
    },
    {
     "t": "PRO / resultado operativo recurrente",
     "d": "Beneficio operativo antes de partidas no recurrentes; base del margen operativo de LVMH y Hermès."
    },
    {
     "t": "Cliente aspiracional",
     "d": "Comprador de renta media-alta, más sensible al ciclo que el cliente de alto patrimonio."
    },
    {
     "t": "Demanda local / turística",
     "d": "Compras de residentes frente a compras de viajeros (onshore / offshore)."
    },
    {
     "t": "Travel retail",
     "d": "Ventas en aeropuertos y puntos ligados al turismo internacional."
    },
    {
     "t": "Mayorista",
     "d": "Venta a través de terceros o concesiones, frente a tiendas propias (retail)."
    }
   ]
  }
 ],
 "machinery": [
  {
   "sector": "machinery",
   "trimestre": "2026-2T",
   "sectorNombre": "Maquinaria / Capital Goods",
   "label": "2T 2026",
   "labelAnterior": "1T 2026",
   "meses": "abr–jun 2026",
   "publicado": "18-sep-2026",
   "empresas": [
    {
     "id": "CAT",
     "nombre": "Caterpillar"
    },
    {
     "id": "DE",
     "nombre": "Deere"
    },
    {
     "id": "ETN",
     "nombre": "Eaton"
    }
   ],
   "titulo": "La energía para centros de datos llena las carteras y la construcción no residencial se suma; el campo sigue en suelo y los reembolsos arancelarios embellecen los márgenes",
   "tarjeta": "Energía y centros de datos llenan las carteras, la construcción acelera y el campo sigue en suelo",
   "drivers": "carteras de pedidos y book-to-bill · ventas a usuario final e inventario de distribuidores · precio frente a coste · aranceles · energía y centros de datos · ciclo agrícola y construcción",
   "pregunta": {
    "q": "¿El ciclo de inversión se amplía más allá de los centros de datos o sigue dependiendo de la IA?",
    "a": "Se amplía, pero no llega al campo. Junto a la energía para centros de datos (Power Generation de Caterpillar +29% en ventas; centros de datos de Eaton ~+65% orgánico) acelera la construcción no residencial: las ventas a usuario final de construcción de Caterpillar pasan de +7% a +22% y Construction & Forestry de Deere crece un 18%. La gran agricultura, en cambio, sigue cayendo (−6%) y su debilidad se desplaza de Norteamérica a Brasil y Europa."
   },
   "takeaways": [
    {
     "lead": "Dos ciclos en un mismo sector.",
     "texto": "Las ventas a usuario final de Power Generation de Caterpillar crecen un 72% (+48% en el 1T) y Eaton eleva su guía orgánica al 11–13%, mientras Deere vende un 6% menos en gran agricultura y mantiene una previsión de −15/−20% para la industria de Large Ag en EE.UU. y Canadá."
    },
    {
     "lead": "Las carteras crecen más deprisa que la capacidad de entregar.",
     "texto": "El backlog de Caterpillar sube $9,4B en el trimestre, hasta $72,1B (+92% interanual), y el de Eaton alcanza $24,1B, con book-to-bill de 1,2. Los plazos de gas prime y turbinas de Caterpillar llegan a 2028–2029: el límite es la capacidad, no la demanda."
    },
    {
     "lead": "La construcción no residencial se suma al impulso.",
     "texto": "Construction Industries de Caterpillar crece un 35% (Norteamérica +50%) y sus ventas a usuario final, un 22%; Deere eleva su previsión de construcción en EE.UU. y Canadá a +5/+10% y su margen en C&F pasa del 7,7% al 12,1%. Infraestructura, centros de datos, energía y alquiler son los motores citados; el residencial sigue débil."
    },
    {
     "lead": "Los reembolsos de aranceles IEEPA inflan los márgenes.",
     "texto": "Caterpillar registra 392 M$ de recuperaciones en el coste de ventas y los incluye en su margen ajustado del 21,9% (~20,0% sin ellas, calculado); Deere contabiliza 110 M$. Eaton, casi sin reembolsos (2,8 M$), muestra el coste real: margen bruto −350 pb, con −390 pb por materias primas y salarios."
    },
    {
     "lead": "La agricultura busca suelo en Norteamérica y empeora fuera.",
     "texto": "Deere reitera que 2026 será el suelo del ciclo agrícola y sus programas de pedidos anticipados de pulverizadores y sembradoras suben a un dígito medio. Pero las ventas de PPA caen por Brasil y Europa, y la compañía revisa a la baja sus previsiones para Sudamérica y Europa."
    }
   ],
   "cambios": [
    {
     "kpi": "Guías anuales",
     "dir": "Al alza",
     "texto": "Caterpillar pasa de un crecimiento de ventas «low double-digit» a «mid- to high teens»; Eaton, de un orgánico del 9–11% al 11–13%; Deere, de un beneficio neto de $4,5–5,0B a $4,75–5,00B."
    },
    {
     "kpi": "Construcción",
     "dir": "Acelera",
     "texto": "Ventas a usuario final de construcción de Caterpillar de +7% a +22%; Deere eleva su previsión de construcción en EE.UU. y Canadá."
    },
    {
     "kpi": "Power Generation",
     "dir": "Acelera",
     "texto": "Ventas a usuario final de +48% a +72% en Caterpillar. En Eaton, el orgánico pasa de +10% a +14% y la cartera, de $22,8B a $24,1B."
    },
    {
     "kpi": "Márgenes",
     "dir": "Mejoran, con ayuda",
     "texto": "Margen ajustado de Caterpillar del 18,0% al 21,9%, con 392 M$ de IEEPA incluidos. Eaton sube del 22,7% al 23,1% en segmentos y del 25,6% al 27,5% en Electrical Americas, aún por debajo del 29,5% del 2T25."
    },
    {
     "kpi": "Aranceles",
     "dir": "Se moderan",
     "texto": "Coste trimestral de Caterpillar de 600 M$ en el 1T a ~400 M$ (se estimaban ~700 M$); gasto directo anual de Deere de $1,2B a ~$1,1B por la rebaja de la Sección 232."
    },
    {
     "kpi": "Agricultura fuera de Norteamérica",
     "dir": "Empeora",
     "texto": "Deere revisa Sudamérica a −15/−20% y Europa a plano; PPA cae un 6% por Brasil y Europa."
    },
    {
     "kpi": "Inventario de distribuidores de Caterpillar",
     "dir": "Se frena",
     "texto": "Sube 600 M$ en el 2T frente a $2,0B en el 1T; en construcción, 400 M$ frente a $1,5B (1T calculado a partir del semestre)."
    }
   ],
   "seguimiento": [
    {
     "kpi": "Durabilidad del boom de centros de datos e IA",
     "dir": "Sin señales de enfriamiento",
     "texto": "Eaton crece ~65% orgánico en centros de datos, octavo trimestre por encima del 35%; Caterpillar ya tiene pedidos para 2029–2030."
    },
    {
     "kpi": "Backlogs y book-to-bill",
     "dir": "Siguen al alza",
     "texto": "Caterpillar de $62,7B a $72,1B, con subidas en los tres segmentos; Eaton de $22,8B a $24,1B, con pedidos orgánicos a 12 meses +41% en Electrical Americas y book-to-bill de 1,3."
    },
    {
     "kpi": "Si 2026 es el suelo agrícola",
     "dir": "Se reafirma en Norteamérica",
     "texto": "Deere lo reitera, con pedidos anticipados al alza y demanda norteamericana estable «at very low levels». Fuera de Norteamérica, el suelo aún no se ve."
    },
    {
     "kpi": "Inventario de distribuidores de Caterpillar",
     "dir": "Se modera",
     "texto": "+600 M$ en el trimestre (+$2,6B en el semestre); Caterpillar prevé reducirlo en más de $1B en el 4T. El riesgo queda acotado, no descartado."
    },
    {
     "kpi": "Large Ag, renta agraria y precios agrícolas",
     "dir": "Sin mejora",
     "texto": "Previsión de −15/−20% sin cambios. Balances agrarios «relatively healthy», maíz a futuro en torno a 5,05 $ e inventario de tractores usados de alta potencia casi un 40% menor que hace un año: el canal se sanea, la demanda no se recupera."
    },
    {
     "kpi": "Carreteras, infraestructura e IIJA",
     "dir": "Se mantiene",
     "texto": "Deere mantiene carreteras en ~+10% y eleva construcción en EE.UU.; Caterpillar cita la IIJA como soporte de Norteamérica."
    },
    {
     "kpi": "Impacto real de los aranceles",
     "dir": "Menor, pero enmascarado",
     "texto": "El coste baja, pero los reembolsos IEEPA no se repetirán según las guías y Deere espera más coste neto en FY27."
    },
    {
     "kpi": "Price-cost lag",
     "dir": "Persiste en Eaton",
     "texto": "Precio/coste negativo en Electrical Americas; Eaton prevé neutralizarlo en el 2S con las subidas del 2T y de agosto."
    },
    {
     "kpi": "Costes de arranque de capacidad",
     "dir": "Lo peor parece atrás",
     "texto": "Eaton completa en el 2T su mayor rampa de producción prevista; Caterpillar soporta 149 M$ de costes de fabricación desfavorables en Power & Energy."
    },
    {
     "kpi": "Gestión térmica y equipos eléctricos como cuello de botella",
     "dir": "Se confirma",
     "texto": "Boyd Thermal factura un 20% más de lo comprometido; los plazos de turbinas de Caterpillar llegan a 2029."
    }
   ],
   "scorecard": [
    {
     "titulo": "Resultados",
     "filas": [
      {
       "kpi": "Ingresos",
       "nota": "variación interanual",
       "v": {
        "CAT": {
         "v": "$20,5B · +24%",
         "c": "Volumen +3.113 M$ · precio +595 M$"
        },
        "DE": {
         "v": "$12,6B · +5%",
         "c": "Equipment Operations $11,0B · +6%"
        },
        "ETN": {
         "v": "$8,5B · +21%",
         "c": "+14% orgánico · +7% adquisiciones"
        }
       }
      },
      {
       "kpi": "Margen operativo",
       "nota": "definiciones distintas",
       "v": {
        "CAT": {
         "v": "21,9% ajustado",
         "c": "2T25: 17,6% · 1T26: 18,0% · incluye 392 M$ de IEEPA"
        },
        "DE": {
         "v": "14,4% Equipment Ops",
         "c": "3T FY25: 12,6% (calculado) · incluye 110 M$ de IEEPA"
        },
        "ETN": {
         "v": "23,1% segmentos",
         "c": "−80 pb interanual · 1T26: 22,7%"
        }
       }
      },
      {
       "kpi": "BPA",
       "nota": "variación interanual",
       "v": {
        "CAT": {
         "v": "$8,17 ajustado · +73%",
         "c": "GAAP $7,77; excluye 0,40 $ de reestructuración"
        },
        "DE": {
         "v": "$5,10 · +7%",
         "c": "Sin BPA ajustado; 3T FY25 con deterioro de 61 M$"
        },
        "ETN": {
         "v": "$3,15 ajustado · +7%",
         "c": "GAAP $2,11 · −16% por intereses y amortización"
        }
       }
      },
      {
       "kpi": "Flujo de caja",
       "v": {
        "CAT": {
         "v": "FCF MP&E ~$5,1B",
         "c": "Récord trimestral"
        },
        "DE": {
         "v": "CFO Equipment Ops $4,0B",
         "c": "9M; 9M FY25: $3,3B"
        },
        "ETN": {
         "v": "FCF 874 M$ · +22%",
         "c": "CFO 1.127 M$, récord de un 2T"
        }
       }
      },
      {
       "kpi": "Guía anual",
       "v": {
        "CAT": {
         "v": "Ventas «mid- to high teens»",
         "c": "1T: «low double-digit»"
        },
        "DE": {
         "v": "Beneficio $4,75–5,00B",
         "c": "1T: $4,5–5,0B"
        },
        "ETN": {
         "v": "Orgánico 11–13%",
         "c": "1T: 9–11% · BPA aj. $13,40–13,60"
        }
       }
      }
     ]
    },
    {
     "titulo": "Indicadores sectoriales",
     "filas": [
      {
       "kpi": "Cartera de pedidos (backlog)",
       "v": {
        "CAT": {
         "v": "$72,1B",
         "c": "+$9,4B trimestral · 59% se entrega en 12 meses"
        },
        "DE": {
         "v": "N/D",
         "c": "C&F: 4–5 meses de cartera; PPA llena para el año"
        },
        "ETN": {
         "v": "$24,1B",
         "c": "1T26: $22,8B · ~71% a 12 meses"
        }
       }
      },
      {
       "kpi": "Pedidos y book-to-bill",
       "v": {
        "CAT": {
         "v": "Backlog +92% interanual",
         "c": "No publica pedidos ni book-to-bill"
        },
        "DE": {
         "v": "Pedidos anticipados +mid-single digit",
         "c": "Pulverizadores y sembradoras, Norteamérica, MY2027"
        },
        "ETN": {
         "v": "Book-to-bill 1,2",
         "c": "Pedidos orgánicos 12 m: EA +41% · EG +33%"
        }
       }
      },
      {
       "kpi": "Precio frente a coste",
       "v": {
        "CAT": {
         "v": "Precio +595 M$",
         "c": "1T26: 426 M$ · aranceles ~400 M$ en el trimestre"
        },
        "DE": {
         "v": "Precio +403 M$ antes de impuestos",
         "c": "C&F +8 pp (base con incentivos) · materiales al alza"
        },
        "ETN": {
         "v": "Precio/coste negativo",
         "c": "Margen bruto −350 pb (−390 pb materias primas y salarios)"
        }
       }
      },
      {
       "kpi": "Energía y centros de datos",
       "v": {
        "CAT": {
         "v": "Power Generation +29%",
         "c": "Usuario final +72% (1T26: +48%)"
        },
        "DE": {
         "v": "Citado en C&F",
         "c": "Centros de datos y oleoductos entre los motores de construcción"
        },
        "ETN": {
         "v": "Centros de datos ~+65% orgánico",
         "c": "EA y EG · Boyd 432 M$ de ingresos"
        }
       }
      },
      {
       "kpi": "Construcción",
       "v": {
        "CAT": {
         "v": "Construction Ind. +35%",
         "c": "Usuario final +22% · Norteamérica +27%"
        },
        "DE": {
         "v": "C&F +18%",
         "c": "Margen 12,1% (3T FY25: 7,7%)"
        },
        "ETN": {
         "v": "Machine OEM: pedidos ~+mid-30s%",
         "c": "Comercial e institucional a doble dígito"
        }
       }
      },
      {
       "kpi": "Agricultura y minería",
       "v": {
        "CAT": {
         "v": "Minería +22%",
         "c": "Resource Industries +20% · cobre y oro"
        },
        "DE": {
         "v": "PPA −6% · SAT +12%",
         "c": "Large Ag EE.UU./Canadá: −15/−20% previsto"
        },
        "ETN": {
         "v": "N/A",
         "c": "Sin exposición directa"
        }
       }
      },
      {
       "kpi": "Inventario de distribuidores",
       "v": {
        "CAT": {
         "v": "+600 M$",
         "c": "Construcción +400 M$ · 1S: +$2,6B"
        },
        "DE": {
         "v": "Tractores 100+ CV: 33%",
         "c": "De ventas de 12 meses (2025: 31%) · cosechadoras 25% (26%)"
        },
        "ETN": {
         "v": "N/D",
         "c": "No publica"
        }
       }
      },
      {
       "kpi": "Aranceles e IEEPA",
       "v": {
        "CAT": {
         "v": "392 M$ recuperados",
         "c": "Coste FY26 ~$2,2B sin IEEPA"
        },
        "DE": {
         "v": "110 M$ recuperados",
         "c": "382 M$ en 9M · gasto directo FY26 ~$1,1B"
        },
        "ETN": {
         "v": "2,8 M$ recuperados",
         "c": "Coste arancelario no cuantificado"
        }
       }
      },
      {
       "kpi": "Financiación a clientes",
       "v": {
        "CAT": {
         "v": "Morosidad 1,31%",
         "c": "Mínimo desde 1998 · 2T25: 1,62%"
        },
        "DE": {
         "v": "Fallidos 94 M$",
         "c": "3T FY25: 98 M$ · cartera media −2%"
        },
        "ETN": {
         "v": "N/A",
         "c": "Sin brazo financiero"
        }
       }
      }
     ]
    }
   ],
   "scorecardNota": "B = miles de millones. Variaciones según las publica cada compañía; lo marcado como calculado es cálculo propio. Los márgenes no son homogéneos: Caterpillar publica margen operativo ajustado; Deere, margen de Equipment Operations; Eaton, margen de segmentos. Caterpillar y Deere incluyen los reembolsos IEEPA en sus márgenes. Deere corresponde a su 3T fiscal (may–jul) y compara con el 3T FY25; su referencia del 1T es su 2T fiscal (feb–abr).",
   "companias": [
    {
     "e": "CAT",
     "nombre": "Caterpillar",
     "titular": "Cartera récord y construcción en aceleración",
     "texto": "Ventas +24% y BPA ajustado +73%. El margen ajustado del 21,9% incluye 392 M$ de IEEPA; sin ellos, la dirección se sitúa «near the bottom» de su rango objetivo. Excluye 202 M$ de reestructuración (139 M$ por la venta de entidades no estadounidenses)."
    },
    {
     "e": "DE",
     "nombre": "Deere",
     "titular": "La construcción compensa un campo en suelo",
     "texto": "Ventas de equipos +6%: C&F +18% y SAT +12% frente a PPA −6%. Sube la guía de beneficio a $4,75–5,00B, con 110 M$ de reembolsos IEEPA en el trimestre y ninguno previsto en el resto del ejercicio. El tipo fiscal efectivo sube al 28,1% (calculado)."
    },
    {
     "e": "ETN",
     "nombre": "Eaton",
     "titular": "Pedidos disparados, margen aún por detrás del precio",
     "texto": "Orgánico +14% y guía anual elevada al 11–13%. El margen de segmentos cae 80 pb, presionado por materias primas y salarios. El BPA GAAP cae un 16% por intereses y amortización ligados a Boyd; no habrá recompras en 2026. Acuerda segregar Mobility con Dana."
    }
   ],
   "exhibits": [
    {
     "titulo": "La demanda de generación eléctrica de Caterpillar se acelera trimestre a trimestre",
     "sub": "Caterpillar: ventas a usuario final de Power Generation, variación interanual, %",
     "tipo": "bar",
     "unidad": "%",
     "dec": 0,
     "cero": true,
     "trimestres": [
      "2T25",
      "3T25",
      "4T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "CAT": [
       19,
       33,
       44,
       48,
       72
      ]
     },
     "fuente": "estadísticas de ventas a usuario final de Caterpillar (8-K, Ex. 99.2). Datos de concesionarios, no auditados."
    },
    {
     "titulo": "Las carteras siguen creciendo: Caterpillar suma $9,4B en un solo trimestre",
     "sub": "Cartera de pedidos (backlog), miles de millones de $",
     "tipo": "bar",
     "unidad": "",
     "dec": 1,
     "cero": true,
     "trimestres": [
      "1T26",
      "2T26"
     ],
     "series": {
      "CAT": [
       62.7,
       72.1
      ],
      "ETN": [
       22.8,
       24.1
      ]
     },
     "fuente": "10-Q y calls de Caterpillar y Eaton; 1T26 según el informe del trimestre anterior. Deere no publica backlog."
    },
    {
     "titulo": "Dentro de Deere, la construcción crece y la gran agricultura retrocede",
     "sub": "Deere: ventas netas por segmento, 3T FY26 (may–jul), variación interanual, %",
     "tipo": "bar",
     "unidad": "%",
     "dec": 0,
     "cero": true,
     "trimestres": [
      "Gran agricultura (PPA)",
      "Pequeña agricultura y jardín (SAT)",
      "Construcción y forestal (C&F)"
     ],
     "series": {
      "DE": [
       -6,
       12,
       18
      ]
     },
     "fuente": "nota de resultados de Deere."
    },
    {
     "titulo": "Los márgenes suben donde hay reembolsos arancelarios; Eaton, sin ellos, retrocede",
     "sub": "Margen operativo del trimestre frente al mismo trimestre de 2025, %. CAT: ajustado; DE: Equipment Operations; ETN: segmentos",
     "tipo": "bar",
     "unidad": "%",
     "dec": 1,
     "trimestres": [
      "Mismo trimestre de 2025",
      "2T 2026"
     ],
     "series": {
      "CAT": [
       17.6,
       21.9
      ],
      "DE": [
       12.6,
       14.4
      ],
      "ETN": [
       23.9,
       23.1
      ]
     },
     "fuente": "notas de resultados y calls. Deere 3T FY25 (12,6%) y Eaton 2T25 (23,9%): calculados. Caterpillar incluye 392 M$ y Deere 110 M$ de reembolsos IEEPA."
    }
   ],
   "temas": [
    {
     "titulo": "Energía para la IA: el cuello de botella es la capacidad, no la demanda",
     "parrafos": [
      "La demanda ligada a centros de datos sigue acelerando: Power Generation de Caterpillar crece un 72% en ventas a usuario final (+48% en el 1T) y Eaton, ~65% orgánico en centros de datos. Ninguna describe un freno: Eaton cifra la cartera de centros de datos de EE.UU. en 307 GW, unos 15 años al ritmo de 2025, y Caterpillar recibe ya pedidos para 2029–2030.",
      "Lo que limita las ventas es la oferta. Los plazos de Caterpillar llegan a finales de 2028 en gas prime y a 2029 en turbinas; Eaton invierte más de $1B en capacidad y su cartera sigue creciendo pese a un orgánico del 18% en el sector eléctrico. Es **un ciclo de inversión que se autoalimenta**: la energía para centros de datos exige nuevas fábricas."
     ],
     "evidencias": [
      {
       "e": "CAT",
       "t": "Backlog de $72,1B (+$9,4B en el trimestre), con el mayor aumento en Power & Energy; el de Oil & Gas casi duplica el de hace un año por la compresión de gas."
      },
      {
       "e": "ETN",
       "t": "Pedidos orgánicos a 12 meses +41% en Electrical Americas (+2% un año antes); Boyd Thermal factura 432 M$, un 20% por encima de lo comprometido."
      },
      {
       "e": "DE",
       "t": "La construcción de centros de datos y de oleoductos figura entre los motores de la demanda de construcción de Deere."
      }
     ]
    },
    {
     "titulo": "Construcción: acelera la obra no residencial, con ayuda del canal de alquiler",
     "parrafos": [
      "El dato nuevo del trimestre es la construcción. Las ventas a usuario final de construcción de Caterpillar pasan de +7% a +22%, con todas las regiones en positivo por primera vez en la serie de cinco trimestres, y Deere crece un 18% en C&F. Los motores citados son infraestructura (IIJA), centros de datos, energía y alquiler; el residencial «aren't particularly strong», según Caterpillar, y el forestal cae.",
      "Parte del impulso procede del canal. La carga de flotas de alquiler suma a las ventas a usuario final de Caterpillar, cuyo inventario de distribuidores de construcción crece $1,9B en el semestre. Deere acumula 4–5 meses de cartera en C&F, más de lo deseado. La lectura es de **demanda sólida pero no del todo final**."
     ],
     "evidencias": [
      {
       "e": "CAT",
       "t": "Inventario de distribuidores de construcción +400 M$ en el 2T, más de lo previsto, en anticipación a unas ventas a usuario final más fuertes."
      },
      {
       "e": "DE",
       "t": "Margen de C&F del 12,1% (7,7%); el precio suma 8 pp, en parte por comparar con un 3T FY25 con incentivos. Entre el 30% y el 35% de las transacciones de movimiento de tierras empiezan como alquiler."
      },
      {
       "e": "ETN",
       "t": "Tendencia hacia soluciones prefabricadas y modulares por la escasez de electricistas y fontaneros en obra."
      }
     ]
    },
    {
     "titulo": "Aranceles: menos coste y reembolsos puntuales que no se repetirán",
     "parrafos": [
      "El Tribunal Supremo invalidó los aranceles IEEPA el 20 de febrero y las devoluciones llegan ya a las cuentas. Caterpillar registra 392 M$ en el coste de ventas y no los ajusta: su margen del 21,9% sería del ~20,0% sin ellos (calculado). Deere contabiliza 110 M$ (382 M$ en nueve meses). Ambas excluyen nuevas devoluciones de sus guías.",
      "El coste arancelario de fondo también baja. Caterpillar paga ~400 M$ en el trimestre frente a los ~700 M$ que estimaba en abril y sitúa el año en ~$2,2B. Deere rebaja su gasto directo a ~$1,1B por el recorte de la Sección 232 del 25% al 15%, pero espera un coste neto mayor en FY27. **La mejora de márgenes del trimestre es, por tanto, en parte no recurrente**."
     ],
     "evidencias": [
      {
       "e": "CAT",
       "t": "Impacto arancelario en márgenes: −90 pb en Power & Energy, −340 pb en construcción y −260 pb en Resource Industries; ~600 M$ previstos en el 3T."
      },
      {
       "e": "DE",
       "t": "Arancel neto FY26 de unos 750 M$; en FY27, un ritmo «closer to right around $1 billion». Reparto de los reembolsos: 55% C&F, 25% SAT, 20% PPA."
      },
      {
       "e": "ETN",
       "t": "Reembolso IEEPA de 2,8 M$ en el 2T (<0,01 $ por acción); efecto inmaterial en el 2S."
      }
     ]
    },
    {
     "titulo": "Materias primas: el cobre y el oro reactivan la minería, el campo espera y los costes suben",
     "parrafos": [
      "Las materias primas empujan en direcciones opuestas. En minería, Caterpillar ve la mayoría de los precios por encima del umbral de inversión y flotas envejecidas: sus ventas de minería crecen un 22%. En el campo, Deere espera una recuperación «measured» en 2027, con balances agrarios sanos pero capex prudente. Brasil sufre fertilizantes caros y tipos altos; Europa, calor y sequía.",
      "Como coste, la inflación sigue viva. Eaton pierde 390 pb de margen bruto por materias primas y salarios, y Deere cita materiales, petróleo y fertilizantes afectados por el conflicto en Oriente Medio. El poder de precio es desigual: firme en construcción y energía, y limitado a cubrir inflación en agricultura."
     ],
     "evidencias": [
      {
       "e": "CAT",
       "t": "Resource Industries +20% en ventas; usuario final de minería +15%. Los rebuilds crecerán «moderately»."
      },
      {
       "e": "DE",
       "t": "Inventario de tractores usados de alta potencia de 2023–2024 casi un 40% inferior al de hace un año; el diferencial entre nuevo y usado «has largely normalized»."
      },
      {
       "e": "ETN",
       "t": "Electrical Americas pierde 470 pb de margen por materias primas; Electrical Global, 460 pb por materias primas y salarios."
      }
     ]
    }
   ],
   "citas": [
    {
     "texto": "no one is slowing down at the moment… they're asking us to give them more units",
     "quien": "Joe Creed, CEO",
     "contexto": "Caterpillar, call del 2T26, sobre la demanda de IA"
    },
    {
     "texto": "we continue to believe 2026 will mark the bottom of the current ag equipment cycle",
     "quien": "John May, CEO",
     "contexto": "Deere, nota de resultados del 3T FY26"
    },
    {
     "texto": "Total U.S. data center backlog has grown to 307 gigawatts or 15 years of backlog at 2025 build rates",
     "quien": "Paulo Ruiz, CEO",
     "contexto": "Eaton, call del 2T26"
    }
   ],
   "pulso": {
    "etiqueta": "Después del trimestre · Special Call de Caterpillar del 10 de septiembre y comentarios sobre el trimestre en curso",
    "titulo": "Visibilidad llena para 2027 en energía; la duda pasa a ser cuándo se relaja la oferta",
    "parrafos": [
     "En su Special Call del 10 de septiembre, Caterpillar reitera un crecimiento de ventas «mid- to high teens» para 2026 y describe una capacidad de grandes motores y turbinas «pretty full for 2027». Los acuerdos marco con hiperescaladores planifican a 3–5 años, aunque su conversión en pedidos firmes será «lumpy». Creed no ve a los clientes frenar, pero admite que en algún momento volverá una oferta holgada.",
     "Matiza sus márgenes: el incremental de Power & Energy por encima del 40% en el 2T es «a little noisy» por ajustes arancelarios de periodos anteriores. Los concesionarios hablan de duplicar su flota de alquiler en cinco años."
    ],
    "bullets": [
     {
      "e": "CAT",
      "t": "Resource Industries registra una fuerte entrada de pedidos de grandes camiones mineros en los dos últimos trimestres; locomotoras norteamericanas «very depressed»."
     },
     {
      "e": "DE",
      "t": "Cartera del 4T fiscal llena en PPA y ventas similares a las del 3T en PPA y C&F; márgenes algo menores al no haber reembolsos. Resultados del 4T y actualización de pedidos anticipados el 25 de noviembre."
     },
     {
      "e": "ETN",
      "t": "Primeras lecturas de julio mejores que el 2T en márgenes de Electrical Americas; subidas de precio a principios de agosto. Guía del 3T: orgánico 13,5–15,5% y margen 24,6–25,0%."
     }
    ]
   },
   "macroIntro": "La maquinaria describe una **inversión empresarial partida en dos**: energía, centros de datos, infraestructura y minería crecen con carteras plurianuales, mientras la agricultura sigue en suelo. Los márgenes mejoran, pero en parte por reembolsos arancelarios que no se repetirán.",
   "macro": [
    {
     "tema": "Inversión empresarial",
     "texto": "Carteras récord y pedidos que se amplían más allá de los centros de datos: en Eaton, machine OEM ~mid-30s% y comercial, utilities e industrial en el «mid- to high teens».",
     "vs": "Frente al 1T: más amplia y con guías al alza en las tres compañías."
    },
    {
     "tema": "IA y energía",
     "texto": "Power Generation de Caterpillar +72% en usuario final y centros de datos de Eaton ~+65%. El límite es la capacidad; crece también la compresión de gas.",
     "vs": "Frente al 1T: acelera y se extiende la visibilidad a 2029–2030."
    },
    {
     "tema": "Construcción e infraestructura",
     "texto": "Obra no residencial, infraestructura y alquiler impulsan la demanda; residencial y forestal siguen débiles.",
     "vs": "Frente al 1T: mejora clara, con parte del impulso en el canal de alquiler."
    },
    {
     "tema": "Agricultura",
     "texto": "Norteamérica estable en niveles muy bajos; Brasil y Europa empeoran.",
     "vs": "Frente al 1T: el suelo se confirma en Norteamérica; la debilidad se desplaza a Sudamérica y Europa."
    },
    {
     "tema": "Aranceles y comercio",
     "texto": "Coste menor de lo previsto, reembolsos IEEPA y Sección 232 rebajada al 15%; Deere anticipa más coste neto en FY27.",
     "vs": "Frente al 1T: alivio en 2026, con un efecto puntual que infla los márgenes."
    },
    {
     "tema": "Materias primas y costes",
     "texto": "Cobre y oro sostienen la minería; materiales, salarios, petróleo, flete y fertilizantes presionan márgenes.",
     "vs": "Frente al 1T: la presión de costes persiste y se hace más visible en Eaton."
    },
    {
     "tema": "Crédito",
     "texto": "Morosidad de Cat Financial del 1,31%, mínimo desde 1998; fallidos de Deere estables, aunque su 10-Q advierte de riesgos en Large Ag.",
     "vs": "Frente al 1T: sin tensión visible en los clientes de equipos."
    }
   ],
   "vigilar": [
    "Conversión de los acuerdos marco con hiperescaladores en pedidos firmes y ampliación de capacidad de turbinas y grandes motores de Caterpillar.",
    "Márgenes sin reembolsos IEEPA: Caterpillar «near the bottom» de su rango y Deere sin devoluciones en el 4T; arancel neto de Deere en FY27.",
    "Precio frente a coste en Eaton: si las subidas del 2T y de agosto llevan el margen de segmentos al 24,6–25,0% guiado para el 3T.",
    "Inventario de distribuidores de Caterpillar (caída de más de $1B prevista en el 4T) y peso del alquiler en la demanda de construcción.",
    "Deere: cierre de los pedidos anticipados de sembradoras y cosechadoras y resultados del 4T fiscal (25-nov).",
    "Sudamérica y Europa: tipos, fertilizantes y rentabilidad del cultivo extensivo.",
    "Inflación de materias primas, flete y petróleo frente al poder de precio en construcción y agricultura."
   ],
   "proximo": "Próximos resultados: Eaton y Caterpillar (3T 2026), previsiblemente entre finales de octubre y principios de noviembre; Deere (4T FY26, ago–oct), el 25 de noviembre.",
   "cobertura": [
    {
     "empresa": "Caterpillar",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "4-ago-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000040/ex991toformcat2q2026earnin.htm"
      },
      {
       "t": "Ventas a usuario final",
       "url": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000040/ex992toformcat2q2026retail.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm"
      },
      {
       "t": "Call 4-ago y Special Call 10-sep"
      }
     ]
    },
    {
     "empresa": "Deere",
     "fiscal": "3T FY2026",
     "meses": "may–jul (cierre 2-ago)",
     "publicado": "20-ago-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/315189/000110465926098904/de-20260820xex99d1.htm"
      },
      {
       "t": "Presentación",
       "url": "https://www.sec.gov/Archives/edgar/data/315189/000110465926098904/de-20260820xex99d2.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/315189/000110465926102213/de-20260802x10q.htm"
      },
      {
       "t": "Call 20-ago"
      }
     ]
    },
    {
     "empresa": "Eaton",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "31-jul-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/1551182/000155118226000027/etn06302026exhibit99.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/1551182/000155118226000030/etn-20260630.htm"
      },
      {
       "t": "Call 31-jul"
      }
     ]
    }
   ],
   "metodo": "Trimestre natural: cada compañía se asigna al trimestre natural con el que comparte más días de su periodo fiscal. Caterpillar y Eaton cierran en junio; Deere entra con su 3T fiscal (may–jul, cierre 2-ago), que comparte dos meses con el 2T natural. Cifras según las publican las compañías; lo calculado se marca. Las referencias del 1T proceden del informe anterior o, en Caterpillar y Eaton, del semestre menos el 2T. La Special Call de Caterpillar de septiembre y los comentarios sobre el trimestre en curso se presentan por separado.",
   "glosario": [
    {
     "t": "Backlog",
     "d": "Cartera de pedidos firmes pendientes de entregar o facturar."
    },
    {
     "t": "Book-to-bill",
     "d": "Pedidos recibidos entre ventas facturadas; por encima de 1, la demanda supera a la producción."
    },
    {
     "t": "Ventas a usuario final (STU)",
     "d": "Ventas de los concesionarios de Caterpillar a clientes finales; distinguen la demanda real del relleno del canal."
    },
    {
     "t": "Inventario de distribuidores",
     "d": "Equipos en manos de concesionarios; su aumento puede anticipar ventas o un ajuste posterior."
    },
    {
     "t": "IEEPA",
     "d": "Ley de emergencia económica usada para imponer aranceles que el Tribunal Supremo invalidó en febrero de 2026; origina devoluciones."
    },
    {
     "t": "Pedidos anticipados (EOP)",
     "d": "Programas de reserva de Deere para la campaña siguiente; primera señal de la demanda agrícola del año próximo."
    },
    {
     "t": "Precio/coste",
     "d": "Diferencia entre la subida de precios y la inflación de costes; si es negativa, erosiona el margen."
    },
    {
     "t": "Generación prime",
     "d": "Generación eléctrica principal, no de respaldo, a menudo detrás del contador para centros de datos."
    }
   ]
  }
 ],
 "oilgas": [
  {
   "sector": "oilgas",
   "trimestre": "2026-2T",
   "sectorNombre": "Oil & Gas",
   "label": "2T 2026",
   "labelAnterior": "1T 2026",
   "meses": "abr–jun 2026",
   "publicado": "18-sep-2026",
   "empresas": [
    {
     "id": "XOM",
     "nombre": "ExxonMobil"
    },
    {
     "id": "COP",
     "nombre": "ConocoPhillips"
    },
    {
     "id": "SLB",
     "nombre": "SLB"
    }
   ],
   "titulo": "Ormuz convierte el shock de oferta en caja: el precio del crudo y el margen de refino compensan con holgura el volumen perdido en el Golfo, mientras el gas de EE.UU. se hunde y los servicios sortean Oriente Medio",
   "tarjeta": "Crudo y refino compensan con holgura el volumen perdido en el Golfo; el gas de EE.UU. se hunde",
   "drivers": "precio del crudo y del gas · producción y Oriente Medio · margen de refino · costes · capex · caja y retribución · actividad de servicios",
   "pregunta": {
    "q": "¿Compensa el precio la pérdida de volumen en Oriente Medio?",
    "a": "En las operadoras, con holgura. ExxonMobil produce 4.514 kbep/d (4.630 un año antes) y ConocoPhillips 2.248 kbep/d con Qatar prácticamente parado, pero el beneficio ajustado se duplica con creces frente al 2T25 en ambas (+111% y +120%, calculado). En el Upstream de ExxonMobil el efecto precio suma 4.650 M$ frente a los 1.060 M$ que resta el volumen de Oriente Medio. En servicios, SLB pierde un 13% trimestral en Oriente Medio y aun así crece un 3% gracias al resto de regiones."
   },
   "takeaways": [
    {
     "lead": "El precio compensa con creces la pérdida de volumen.",
     "texto": "Con el estrecho de Ormuz cerrado todo el trimestre, el Brent promedia 104,52 $/b (80,61 $/b en el 1T). El beneficio ajustado de ExxonMobil pasa de $8,8B a $14,7B y el de ConocoPhillips de $2,32B a $3,95B, aunque ambas producen menos que en el 1T."
    },
    {
     "lead": "El refino es el cuello de botella y el canal de beneficio más potente.",
     "texto": "El margen de refino indicativo de ExxonMobil sube a 29,0 $/b (16,3 $/b en el 1T) y el margen de Energy Products aporta 3.180 M$ más que un año antes. Woods cuenta unos 3 Mb/d de capacidad retirada por el cierre del estrecho, a la que se suma China sin exportar y el refino ruso afectado."
    },
    {
     "lead": "El gas se parte en dos mercados.",
     "texto": "El gas realizado en EE.UU. cae a 0,52 $/kcf en ExxonMobil y a −1,44 $/mcf en el Lower 48 de ConocoPhillips, con Henry Hub en 2,90 $. Fuera de EE.UU., ExxonMobil realiza 13,96 $/kcf, ConocoPhillips cobra 16,03 $/mcf en Noruega y el TTF promedia 16,45 $."
    },
    {
     "lead": "La caja extraordinaria va al accionista y al balance, no al capex.",
     "texto": "ExxonMobil genera $17,2B de FCF, reduce su deuda neta en más de $7B y recompra $5,1B; ConocoPhillips duplica sus recompras hasta $2,0B. Ninguna de las dos cambia su guía de inversión para 2026 ($27–29B y $12–12,5B)."
    },
    {
     "lead": "En servicios, el resto del mundo y los centros de datos compensan el Golfo.",
     "texto": "Los ingresos de SLB en Oriente Medio caen un 13% trimestral (1.660 M$), mientras Latinoamérica sube un 12% y Asia un 17%. Data Center Solutions factura 186 M$ (+80% interanual) y la dirección habla por primera vez de *características de upcycle*."
    }
   ],
   "cambios": [
    {
     "kpi": "Precio del crudo",
     "dir": "Se dispara",
     "texto": "Brent de 80,61 a 104,52 $/b. Crudo realizado en EE.UU. de ExxonMobil de 70,12 a 97,58 $/b; crudo realizado de ConocoPhillips de 73,47 a 99,40 $/b."
    },
    {
     "kpi": "Gas en EE.UU.",
     "dir": "Se hunde",
     "texto": "Henry Hub de 5,01 a 2,90 $ (serie de ExxonMobil). Gas realizado en EE.UU. de ExxonMobil de 3,37 a 0,52 $/kcf; Lower 48 de ConocoPhillips de 1,19 a −1,44 $/mcf."
    },
    {
     "kpi": "Margen de refino",
     "dir": "Se amplía",
     "texto": "Margen indicativo de ExxonMobil de 16,3 a 29,0 $/b. Energy Products pasa de un resultado GAAP de −1.262 M$ a 5.465 M$, con la reversión de efectos temporales de derivados."
    },
    {
     "kpi": "Producción",
     "dir": "Retrocede",
     "texto": "ExxonMobil de 4.594 a 4.514 kbep/d; ConocoPhillips de 2.309 a 2.248 kbep/d, con sus filiales (Qatar) de 212 a 147 kbep/d."
    },
    {
     "kpi": "Generación de caja",
     "dir": "Mejora",
     "texto": "FCF de ExxonMobil de $2,7B a $17,2B. CFO de ConocoPhillips de $4,30B a $7,43B. SLB pasa de un FCF de −23 M$ (calculado) a 716 M$."
    },
    {
     "kpi": "Lectura del ciclo en servicios",
     "dir": "Mejora",
     "texto": "En el 1T SLB describía un impacto severo en Oriente Medio y FCF negativo. Ahora considera el golpe *largely transitory* y habla de ciclo alcista."
    }
   ],
   "seguimiento": [
    {
     "kpi": "Duración del shock en Oriente Medio y Ormuz",
     "dir": "Se prolonga",
     "texto": "El cierre del estrecho dura todo el trimestre. ExxonMobil pierde ~10% de su producción de Upstream y SLB un 13% trimestral de ingresos en la región."
    },
    {
     "kpi": "Producción de Qatar y exposición al GNL",
     "dir": "Parada",
     "texto": "Ras Laffan estuvo *largely shut in*: la producción de filiales de ConocoPhillips baja a 147 kbep/d (212 en el 1T). ExxonMobil ayuda a QatarEnergy a reparar dos trenes de GNL."
    },
    {
     "kpi": "Inventarios comerciales y reservas estratégicas",
     "dir": "Se vacían",
     "texto": "SLB los describe agotados durante el conflicto y ve en su reposición un soporte del precio. En septiembre, ExxonMobil habla de liberaciones sin precedentes."
    },
    {
     "kpi": "Golden Pass y proyectos de GNL",
     "dir": "Avanza",
     "texto": "Golden Pass entra en producción y ExxonMobil prevé las FID de Mozambique y Papúa Nueva Guinea este año. ConocoPhillips eleva su offtake de 10,2 a 12,2 MTPA."
    },
    {
     "kpi": "Productividad del Pérmico",
     "dir": "Récord",
     "texto": "ExxonMobil supera 1,8 Mbep/d (1,7 Mbep/d en el 1T); ConocoPhillips alcanza un récord de ~920 kbep/d y cita surfactantes con hasta un 20% más de productividad."
    },
    {
     "kpi": "Guyana",
     "dir": "Pasa de volumen a caja",
     "texto": "Producción bruta de ~900 kbd y 5.º FPSO en el 4T26 (+250 kbd). Recuperada la inversión, bajan los volúmenes con derecho, pero ExxonMobil habla de una *inflection into free cash flow*."
    },
    {
     "kpi": "FCF y circulante de SLB",
     "dir": "Se normaliza",
     "texto": "FCF de 716 M$ tras −23 M$ en el 1T (calculado), por estacionalidad. Espera un 2S *materialmente mayor*."
    },
    {
     "kpi": "Digital, IA y automatización",
     "dir": "Acelera",
     "texto": "Digital de SLB factura 697 M$ (+18% interanual) con un ARR de 1.040 M$ (+15%). ExxonMobil identifica con IA cuatro nuevas oportunidades en Guyana."
    },
    {
     "kpi": "Disciplina de capex",
     "dir": "Se mantiene",
     "texto": "Guías anuales sin cambios ($27–29B en ExxonMobil, $12–12,5B en ConocoPhillips, ~2.500 M$ en SLB) pese a un Brent por encima de 100 $/b."
    },
    {
     "kpi": "Retribución frente a reinversión",
     "dir": "Más retribución",
     "texto": "ConocoPhillips duplica recompras y reafirma el 45% del CFO (~40% en el 1S). ExxonMobil recompra $5,1B, al ritmo de $20B anuales."
    }
   ],
   "scorecard": [
    {
     "titulo": "Resultados",
     "filas": [
      {
       "kpi": "Ingresos",
       "nota": "ventas y otros ingresos operativos",
       "v": {
        "XOM": {
         "v": "$114,5B",
         "c": "2T25: $79,5B · +44,1% interanual (calculado)"
        },
        "COP": {
         "v": "$19,2B",
         "c": "1T26: $15,8B · 2T25: $14,0B · +36,8% interanual (calculado)"
        },
        "SLB": {
         "v": "$8,97B · +5%",
         "c": "+3% trimestral; −5% pro forma con ChampionX"
        }
       }
      },
      {
       "kpi": "Beneficio neto GAAP",
       "v": {
        "XOM": {
         "v": "$14,5B",
         "c": "1T26: $4,2B · 2T25: $7,1B"
        },
        "COP": {
         "v": "$3,93B",
         "c": "1T26: $2,18B · 2T25: $1,97B"
        },
        "SLB": {
         "v": "786 M$ · −22%",
         "c": "1T26: 752 M$"
        }
       }
      },
      {
       "kpi": "Beneficio ajustado",
       "v": {
        "XOM": {
         "v": "$14,7B",
         "c": "1T26: $8,8B · 2T25: $7,0B · +111% (calculado)"
        },
        "COP": {
         "v": "$3,95B",
         "c": "1T26: $2,32B · 2T25: $1,79B · +120% (calculado)"
        },
        "SLB": {
         "v": "833 M$ · −18%",
         "c": "Sin charges & credits; 1T26: 783 M$"
        }
       }
      },
      {
       "kpi": "BPA ajustado",
       "v": {
        "XOM": {
         "v": "$3,52",
         "c": "1T26: $2,09 · 2T25: $1,61 · GAAP $3,48"
        },
        "COP": {
         "v": "$3,24",
         "c": "2T25: $1,42 · GAAP $3,23"
        },
        "SLB": {
         "v": "$0,55 · −26%",
         "c": "+6% trimestral · GAAP $0,52"
        }
       }
      },
      {
       "kpi": "Partidas no recurrentes",
       "v": {
        "XOM": {
         "v": "Timing +2.483 M$",
         "c": "Deterioros −1.079 M$; otras partidas −1.559 M$ (reservas financieras y Oriente Medio)"
        },
        "COP": {
         "v": "−20 M$ netos",
         "c": "Transacción, cobertura de PALNG y litigios"
        },
        "SLB": {
         "v": "−69 M$ antes de impuestos",
         "c": "Integración, sobre todo ChampionX"
        }
       }
      }
     ]
    },
    {
     "titulo": "Indicadores sectoriales",
     "filas": [
      {
       "kpi": "Producción",
       "nota": "miles de bep/d",
       "v": {
        "XOM": {
         "v": "4.514",
         "c": "1T26: 4.594 · 2T25: 4.630"
        },
        "COP": {
         "v": "2.248",
         "c": "1T26: 2.309 · −4% subyacente interanual"
        },
        "SLB": {
         "v": "N/D",
         "c": "Proveedor de servicios"
        }
       }
      },
      {
       "kpi": "Pérmico",
       "v": {
        "XOM": {
         "v": ">1,8 Mbep/d · récord",
         "c": "Crecimiento previsto del 9% anual hasta 2030"
        },
        "COP": {
         "v": "922 kbep/d (calculado) · récord",
         "c": "+10% subyacente interanual en el 1S"
        },
        "SLB": {
         "v": "N/D",
         "c": "Repunte en tierra en EE.UU."
        }
       }
      },
      {
       "kpi": "Crudo realizado",
       "v": {
        "XOM": {
         "v": "97,58 $/b (EE.UU.)",
         "c": "Fuera de EE.UU.: 92,42 · 1T26 EE.UU.: 70,12"
        },
        "COP": {
         "v": "99,40 $/b · +55%",
         "c": "1T26: 73,47 · 2T25: 64,23"
        },
        "SLB": {
         "v": "N/D",
         "c": "—"
        }
       }
      },
      {
       "kpi": "Gas realizado",
       "v": {
        "XOM": {
         "v": "0,52 $/kcf (EE.UU.)",
         "c": "Fuera de EE.UU.: 13,96 · 1T26 EE.UU.: 3,37"
        },
        "COP": {
         "v": "−1,44 $/mcf (Lower 48)",
         "c": "Noruega: 16,03 · 1T26 Lower 48: 1,19"
        },
        "SLB": {
         "v": "N/D",
         "c": "—"
        }
       }
      },
      {
       "kpi": "Margen de refino",
       "v": {
        "XOM": {
         "v": "29,0 $/b indicativo",
         "c": "1T26: 16,3 · Energy Products ajustado $4,1B"
        },
        "COP": {
         "v": "N/D",
         "c": "E&P puro"
        },
        "SLB": {
         "v": "N/D",
         "c": "—"
        }
       }
      },
      {
       "kpi": "CFO / FCF",
       "v": {
        "XOM": {
         "v": "$23,6B / $17,2B",
         "c": "CFO sin circulante $25,7B · FCF 1T26: $2,7B"
        },
        "COP": {
         "v": "$7,43B / ~$4,2B",
         "c": "CFO sin circulante $7,18B · FCF 1T26: 2.439 M$ (calculado)"
        },
        "SLB": {
         "v": "1.359 M$ / 716 M$",
         "c": "FCF 1T26: −23 M$ (calculado)"
        }
       }
      },
      {
       "kpi": "Capex",
       "v": {
        "XOM": {
         "v": "$6,8B",
         "c": "Guía 2026: $27–29B"
        },
        "COP": {
         "v": "$3,02B",
         "c": "Guía 2026: $12–12,5B, sin cambios"
        },
        "SLB": {
         "v": "643 M$",
         "c": "Incluye APS y datos de exploración; guía 2026: ~2.500 M$"
        }
       }
      },
      {
       "kpi": "Retribución al accionista",
       "v": {
        "XOM": {
         "v": "$9,4B",
         "c": "Recompras $5,1B; dividendos $4,3B"
        },
        "COP": {
         "v": "$3,0B",
         "c": "Recompras $2,0B (1T26: $1,0B); objetivo: 45% del CFO"
        },
        "SLB": {
         "v": "Recompras 648 M$",
         "c": "Dividendos 440 M$; guía 2026: >4.000 M$"
        }
       }
      },
      {
       "kpi": "Ingresos por región (SLB)",
       "nota": "variación trimestral",
       "v": {
        "XOM": {
         "v": "N/D",
         "c": "—"
        },
        "COP": {
         "v": "N/D",
         "c": "—"
        },
        "SLB": {
         "v": "Oriente Medio 1.660 M$ · −13%",
         "c": "Latinoamérica +12% · Europa y África +6% · Asia +17%"
        }
       }
      }
     ]
    }
   ],
   "scorecardNota": "B = miles de millones; bep = barriles equivalentes de petróleo. Variaciones según las publican las compañías; las marcadas «calculado» son propias. El beneficio GAAP de ExxonMobil está distorsionado por efectos temporales de derivados (+2.483 M$ en el 2T, −3.883 M$ en el 1T): el ajustado es mejor guía. ExxonMobil y ConocoPhillips definen el FCF de forma distinta (el de ConocoPhillips procede de la call). Las comparativas interanuales de SLB incluyen ChampionX, consolidada desde el 3T25.",
   "companias": [
    {
     "e": "XOM",
     "nombre": "ExxonMobil",
     "titular": "El refino y el Pérmico compensan la pérdida de Oriente Medio",
     "texto": "Beneficio ajustado de $14,7B, con Energy Products en $4,1B. La producción cae a 4.514 kbep/d, pero sin Oriente Medio es la más alta de Upstream en más de dos décadas. FCF de $17,2B y guía de capex sin cambios. Registra 1.079 M$ de deterioros y 1.365 M$ de reservas financieras."
    },
    {
     "e": "COP",
     "nombre": "ConocoPhillips",
     "titular": "Precio sin coberturas, Qatar parado y recompras duplicadas",
     "texto": "Precio realizado de 62,33 $/bep (+36%) sin coberturas y producción por encima de su guía pese a Qatar. Recompras duplicadas y capex estable. Andy O'Brien, hasta ahora CFO, es CEO desde el 1 de septiembre."
    },
    {
     "e": "SLB",
     "nombre": "SLB",
     "titular": "Oriente Medio resta; el resto del mundo y los centros de datos suman",
     "texto": "Ingresos de $8,97B (+3% trimestral) y BPA sin partidas de $0,55. El margen core baja al 15,3% con el precio de los servicios en contra. Guía del 3T: ingresos +3–4% trimestral."
    }
   ],
   "exhibits": [
    {
     "titulo": "El beneficio ajustado de las operadoras da un salto en el 2T con Ormuz cerrado",
     "sub": "Beneficio ajustado, miles de millones de $",
     "tipo": "bar",
     "unidad": "",
     "dec": 1,
     "cero": true,
     "trimestres": [
      "2T25",
      "3T25",
      "4T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "XOM": [
       6.972,
       7.902,
       6.92,
       8.772,
       14.68
      ],
      "COP": [
       1.793,
       2.007,
       1.263,
       2.324,
       3.951
      ]
     },
     "fuente": "suplementos financieros de ExxonMobil y ConocoPhillips. SLB no publica una serie comparable."
    },
    {
     "titulo": "El margen de refino se dispara: el cuello de botella está en los productos, no solo en el crudo",
     "sub": "ExxonMobil: margen de refino indicativo, $/b",
     "tipo": "bar",
     "unidad": "",
     "dec": 1,
     "cero": true,
     "trimestres": [
      "3T25",
      "4T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "XOM": [
       17.5,
       18.3,
       16.3,
       29.0
      ]
     },
     "fuente": "Investor Relations Data Summary de ExxonMobil (serie de cuatro trimestres)."
    },
    {
     "titulo": "La producción de las operadoras retrocede con Qatar y Oriente Medio fuera del mercado",
     "sub": "Producción total, millones de bep/d",
     "tipo": "line",
     "unidad": "",
     "dec": 2,
     "trimestres": [
      "2T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "XOM": [
       4.63,
       4.594,
       4.514
      ],
      "COP": [
       2.391,
       2.309,
       2.248
      ]
     },
     "fuente": "notas de resultados, suplementos y 10-Q de las compañías."
    },
    {
     "titulo": "SLB: la caída de Oriente Medio se compensa en el resto de regiones",
     "sub": "SLB: ingresos por región, variación trimestral en el 2T26, %",
     "tipo": "bar",
     "unidad": "%",
     "dec": 0,
     "trimestres": [
      "Oriente Medio",
      "Norteamérica",
      "Europa y África",
      "Latinoamérica",
      "Asia",
      "Total"
     ],
     "series": {
      "SLB": [
       -13,
       4,
       6,
       12,
       17,
       3
      ]
     },
     "fuente": "nota de resultados, call y 10-Q de SLB. Oriente Medio y Asia forman un único segmento."
    }
   ],
   "temas": [
    {
     "titulo": "Ormuz: un shock de oferta que se cobra en precio y se paga en volumen",
     "parrafos": [
      "El conflicto con Irán y el cierre del estrecho se mantienen durante todo el trimestre. El Brent promedia 104,52 $/b, un 54% más que un año antes, y el WTI 92,79 $/b. Las operadoras pierden volumen en la región: ExxonMobil cifra en ~10% la pérdida temporal de su producción de Upstream y ConocoPhillips ve caer su producción de filiales, sobre todo Qatar, de 212 a 147 kbep/d en un trimestre.",
      "El efecto precio domina. En el Upstream de ExxonMobil suma 4.650 M$ frente al 2T25, mientras el volumen de Oriente Medio resta 1.060 M$. ConocoPhillips, que opera **sin coberturas**, eleva su precio realizado a 62,33 $/bep (+36%). Apunta a que el shock beneficia sobre todo a los productores con crudo fuera del Golfo, en particular en Norteamérica."
     ],
     "evidencias": [
      {
       "e": "XOM",
       "t": "Producción de 4.514 kbep/d (−116 interanual). Sin Oriente Medio, la más alta de Upstream en más de dos décadas."
      },
      {
       "e": "COP",
       "t": "Crudo realizado de 99,40 $/b (+55%). Qatar pesaba en torno al 4% de la producción de 2025; los activos no han sufrido daños."
      },
      {
       "e": "SLB",
       "t": "Actividad reanudada en EAU, Qatar y, en menor medida, Arabia Saudí; Irak sigue limitado. La recuperación llevará de semanas a trimestres según el país."
      }
     ]
    },
    {
     "titulo": "Refino y química: el cuello de botella está en los productos",
     "parrafos": [
      "El margen de refino indicativo de ExxonMobil sube a 29,0 $/b desde 16,3 $/b en el 1T, y el margen de Energy Products aporta 3.180 M$ más que un año antes. Woods explica la escasez por el lado de la oferta: unos 3 Mb/d de capacidad afectada por el cierre del estrecho, un par de Mb/d más porque China ha dejado de exportar y cerca de 1 Mb/d de refino ruso afectado por Ucrania. La química norteamericana, con etano barato, cubre el hueco de Oriente Medio: el polietileno de Norteamérica pasa de 965 a 1.454 $/t.",
      "Dos cautelas. El beneficio GAAP de refino está muy distorsionado por **efectos temporales de derivados** (+2.546 M$ en Energy Products tras −3.355 M$ en el 1T). Y los márgenes químicos siguen por debajo del mínimo de su rango de diez años, con volúmenes a la baja. En la call, además, la dirección respondió a preguntas sobre posibles impuestos extraordinarios en Europa."
     ],
     "evidencias": [
      {
       "e": "XOM",
       "t": "Récord de producción de diésel en un segundo trimestre y fiabilidad de más del 95% en las refinerías del Golfo de EE.UU. Energy Products pesa ~23% del beneficio de las líneas de negocio (~9% hace cinco años)."
      },
      {
       "e": "XOM",
       "t": "Márgenes de bases lubricantes *los mejores de la historia* y beneficio ajustado récord en Specialty Products (969 M$)."
      }
     ]
    },
    {
     "titulo": "Gas: EE.UU. saturado frente a un mercado internacional tensionado",
     "parrafos": [
      "Henry Hub cae a 2,90 $ (5,01 $ en el 1T) y los precios realizados en EE.UU. se desploman: 0,52 $/kcf en ExxonMobil y −1,44 $/mcf en el Lower 48 de ConocoPhillips. Fuera, el TTF promedia 16,45 $ y el gas noruego de ConocoPhillips se cobra a 16,03 $/mcf. ConocoPhillips atribuye la caída de Henry Hub a demanda estacional débil, producción al alza e inventarios altos; el gas le resta 459 M$ en el Lower 48 frente al 2T25.",
      "Un precio realizado negativo es consistente con un exceso de gas asociado al crudo en algunas cuencas, aunque los documentos no citan la causa regional. La otra cara es el GNL: con Qatar parado, las compañías refuerzan su exposición. ConocoPhillips eleva su offtake a 12,2 MTPA y ve el riesgo de precio *very much asymmetric to the upside*."
     ],
     "evidencias": [
      {
       "e": "XOM",
       "t": "Gas disponible para venta de 6.849 Mpc/d (7.779 en el 1T); en Asia, 1.274 Mpc/d frente a 3.206 un año antes. FID de Mozambique y Papúa Nueva Guinea previstas este año."
      },
      {
       "e": "COP",
       "t": "Gas realizado total de 2,58 $/mcf (−38% interanual). Cada 1 $/MMBtu de margen sobre 5 MTPA equivale a unos 200 M$ de flujo de caja."
      }
     ]
    },
    {
     "titulo": "Disciplina de capital: la caja extraordinaria va al accionista y al balance",
     "parrafos": [
      "Con el crudo por encima de 100 $/b, ninguna operadora acelera la inversión. ExxonMobil genera $17,2B de FCF, recompra $5,1B, paga $4,3B en dividendos y reduce su deuda neta en más de $7B; ConocoPhillips duplica sus recompras hasta $2,0B y reafirma devolver el 45% del CFO en 2026. Las guías de capex no cambian.",
      "La inversión adicional va a activos seleccionados: ConocoPhillips entra en Kirkuk con un coste de suministro de ~30 $/b y ExxonMobil prepara el 5.º FPSO en Guyana. Sugiere que **las grandes operadoras tratan el shock como transitorio** y no lo trasladan a planes de crecimiento."
     ],
     "evidencias": [
      {
       "e": "XOM",
       "t": "Recompras de 33,1 M de acciones a 149,30 $ de media; $10,0B en el semestre, al ritmo del objetivo de $20B anuales."
      },
      {
       "e": "COP",
       "t": "Retribución de $3,0B, un 42% del CFO (calculado). O'Brien ve una tasa de reinversión *estructuralmente* más baja y no plantea reducir el porcentaje de retribución."
      },
      {
       "e": "SLB",
       "t": "Inversión de 2026 de ~2.500 M$ y recompras de al menos 2.400 M$, sin cambios."
      }
     ]
    },
    {
     "titulo": "Servicios: Oriente Medio resta, pero el ciclo fuera del Golfo y los centros de datos toman el relevo",
     "parrafos": [
      "Los ingresos de SLB en Oriente Medio caen un 13% trimestral, hasta 1.660 M$, pero el resto de regiones crece (Latinoamérica +12%, Asia +17%). La dirección cita un aumento de ~30% de las FID de largo ciclo en 2026, liderado por África. El poder de precio no acompaña: el precio de los servicios ha sido *globally a headwind in 2026* y el margen core cae al 15,3% (17,9% un año antes).",
      "En las operadoras no hay señales de inflación de servicios: los gastos de producción de ConocoPhillips bajan 141 M$ interanual y ExxonMobil describe sus costes en caja como *básicamente planos*. Fuera del petróleo, Data Center Solutions de SLB factura 186 M$ (+80%) y apunta a más de 2.000 M$ anualizados a la salida de 2027."
     ],
     "evidencias": [
      {
       "e": "SLB",
       "t": "Backlog de 6.400 M$. Guía del 4T: Oriente Medio de vuelta a 2.100–2.200 M$ y margen EBITDA ajustado en torno al 24%."
      },
      {
       "e": "COP",
       "t": "Mejora del 15% en eficiencia de perforación y completación y laterales un 15% más largos de media que en 2025."
      }
     ]
    }
   ],
   "citas": [
    {
     "texto": "never seen the available capacity relative to demand as low as it is today",
     "quien": "Darren Woods, CEO",
     "contexto": "ExxonMobil, call del 2T26, sobre el refino (excluido el COVID)"
    },
    {
     "texto": "don't confuse consistency of strategy with complacency",
     "quien": "Andy O'Brien, CEO desde el 1-sep",
     "contexto": "ConocoPhillips, call del 2T26"
    },
    {
     "texto": "…is starting to exhibit the characteristics of an upcycle",
     "quien": "Olivier Le Peuch, CEO",
     "contexto": "SLB, call del 2T26, sobre el mercado de servicios"
    }
   ],
   "pulso": {
    "etiqueta": "Después del trimestre · panel de SLB (19-ago), call de Kelvion (31-ago) y conferencia de ExxonMobil (9-sep)",
    "titulo": "El crudo se estabiliza, el refino sigue siendo el cuello de botella y SLB apuesta por los centros de datos",
    "parrafos": [
     "En la conferencia de Barclays del 9 de septiembre, ExxonMobil sostiene que los fundamentales *funcionan*: liberaciones de inventario sin precedentes, más oferta de EE.UU. y Brasil y destrucción de demanda en química y refino. El crudo se ha asentado en un rango acotado, pero el refino sigue siendo el cuello de botella, con márgenes *significativamente más altos*.",
     "SLB anuncia el 31 de agosto la compra de Kelvion (gestión térmica) por unos 3.400 M$ en efectivo más 700 M$ de deuda asumida, con cierre en el 1S27; el 55% de sus ingresos procede de centros de datos. En el panel del 19 de agosto, SLB sitúa el cuello de botella de estos centros en la energía y la mano de obra, no en la computación."
    ],
    "bullets": [
     {
      "e": "XOM",
      "t": "Guyana: volúmenes con derecho ~100.000 b/d menores desde el 3T por la desaturación del cost bank. Las sinergias de Pioneer duplican los ~$2B anuales previstos."
     },
     {
      "e": "COP",
      "t": "Guía del 3T: 2,29–2,32 MMbep/d, sujeta al ritmo de recuperación de Qatar. En julio cerró ventas de activos del Lower 48 por ~1.700 M$ y acordó la entrada en Kirkuk."
     },
     {
      "e": "SLB",
      "t": "Objetivo de centros de datos (con Kelvion) de 4.500–5.000 M$ de ingresos en 2028 y suelo de retribución de 4.000 M$ en 2027."
     }
    ]
   },
   "macroIntro": "El sector describe un **shock de oferta física**, no de demanda: el precio compensa la pérdida de volumen, el cuello de botella se desplaza al refino y el gas se fragmenta entre un EE.UU. saturado y un mercado internacional tensionado.",
   "macro": [
    {
     "tema": "Oferta y geopolítica",
     "texto": "Ormuz cerrado todo el trimestre, Qatar prácticamente parado y ~10% de la producción upstream de ExxonMobil fuera del mercado. SLB anticipa una recuperación de semanas a trimestres según el país.",
     "vs": "Frente al 1T: el riesgo de Ormuz se materializa y se prolonga."
    },
    {
     "tema": "Precios de la energía e inflación",
     "texto": "Brent de 104,52 $/b y margen de refino de 29,0 $/b: el encarecimiento llega al diésel y a la petroquímica (polietileno de Norteamérica, 1.454 $/t frente a 965 $/t), lo que es consistente con presiones en transporte y bienes. SLB ve remitir la inflación logística y de químicos.",
     "vs": "Frente al 1T: el shock pasa del crudo a los productos refinados."
    },
    {
     "tema": "Gas y GNL",
     "texto": "Henry Hub a 2,90 $ y precios realizados negativos en el Lower 48, frente a un TTF de 16,45 $. El GNL gana valor estratégico: ConocoPhillips amplía su offtake a 12,2 MTPA y ExxonMobil prepara dos FID.",
     "vs": "Frente al 1T: la divergencia entre EE.UU. y el resto del mundo se amplía con fuerza."
    },
    {
     "tema": "Inversión upstream",
     "texto": "Las operadoras no mueven sus guías de capex; los servicios anticipan un ciclo de largo plazo (FID +30% en 2026) que se notaría más en 2027.",
     "vs": "Frente al 1T: primer lenguaje de ciclo alcista en servicios, sin cambios en la disciplina de las operadoras."
    },
    {
     "tema": "Demanda e IA",
     "texto": "Los volúmenes químicos de ExxonMobil caen (4.471 kt frente a 5.358 kt) y en septiembre la compañía cita destrucción de demanda en química y refino. En sentido contrario, la demanda eléctrica de los centros de datos impulsa el negocio de SLB (+80% interanual).",
     "vs": "Frente al 1T: primeras señales de destrucción de demanda por precio."
    }
   ],
   "vigilar": [
    "Reapertura de Ormuz y ritmo de recuperación de Qatar: la guía del 3T de ConocoPhillips (2,29–2,32 MMbep/d) la da por hecha.",
    "Persistencia del margen de refino y riesgo de impuestos extraordinarios en Europa.",
    "Gas en EE.UU.: precios realizados negativos y efecto de la nueva capacidad de evacuación del Pérmico.",
    "Guyana: menor volumen con derecho desde el 3T frente al arranque del 5.º FPSO en el 4T26.",
    "SLB: vuelta de Oriente Medio a 2.100–2.200 M$ en el 4T y si el precio de los servicios deja de restar en 2027.",
    "Disciplina de capital con el crudo alto: capex, recompras y el 45% del CFO de ConocoPhillips en el 2S.",
    "Destrucción de demanda en química y refino y reposición de inventarios estratégicos."
   ],
   "proximo": "Próximos resultados: 3T 2026, desde mediados de octubre (SLB) hasta principios de noviembre.",
   "cobertura": [
    {
     "empresa": "ExxonMobil",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "31-jul-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/2115436/000211543626000006/livef8k2q26991.htm"
      },
      {
       "t": "Suplemento",
       "url": "https://www.sec.gov/Archives/edgar/data/2115436/000211543626000006/livef8k2q26992.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/34088/000003408826000093/xom-20260630.htm"
      },
      {
       "t": "Call 31-jul y conferencia 9-sep"
      }
     ]
    },
    {
     "empresa": "ConocoPhillips",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "6-ago-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/1163165/000116316526000030/cop-20260806x8kexx991.htm"
      },
      {
       "t": "Suplemento",
       "url": "https://www.sec.gov/Archives/edgar/data/1163165/000116316526000030/cop-20260806x8kexx992.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/1163165/000116316526000032/cop-20260630.htm"
      },
      {
       "t": "Call 6-ago"
      }
     ]
    },
    {
     "empresa": "SLB",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "24-jul-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/87347/000119312526315068/d122193dex99.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/87347/000119312526322595/slb-20260630.htm"
      },
      {
       "t": "Call 24-jul, panel 19-ago y call de Kelvion 31-ago"
      }
     ]
    }
   ],
   "metodo": "Trimestre natural: cada compañía se asigna al trimestre natural con el que comparte más días de su periodo fiscal; en las tres, periodo fiscal y natural coinciden. Cifras según las publican las compañías; los cálculos propios se marcan como tales. El beneficio GAAP de ExxonMobil incluye efectos temporales de derivados, por lo que la lectura se hace sobre el ajustado. Las comparativas interanuales de SLB incluyen ChampionX. Las conferencias y operaciones de agosto y septiembre se refieren al 3T y se presentan por separado.",
   "glosario": [
    {
     "t": "bep/d",
     "d": "Barriles equivalentes de petróleo al día; suma crudo, líquidos y gas convertido a barriles."
    },
    {
     "t": "Precio realizado",
     "d": "Precio medio que cobra la compañía por su producción, frente a la referencia de mercado (Brent, WTI, Henry Hub)."
    },
    {
     "t": "Margen de refino indicativo",
     "d": "Marcador de ExxonMobil del margen entre el crudo y los productos refinados; no es el margen contable."
    },
    {
     "t": "Efectos temporales (timing effects)",
     "d": "Resultado de derivados y coberturas que se revierte cuando se entrega la mercancía física."
    },
    {
     "t": "Henry Hub / TTF",
     "d": "Precios de referencia del gas natural en EE.UU. y en Europa."
    },
    {
     "t": "GNL y MTPA",
     "d": "Gas natural licuado; capacidad o contratos en millones de toneladas al año."
    },
    {
     "t": "FPSO",
     "d": "Buque de producción, almacenamiento y descarga en aguas profundas, como los de Guyana."
    },
    {
     "t": "FID",
     "d": "Decisión final de inversión de un proyecto; adelanta la demanda de servicios."
    }
   ]
  }
 ],
 "qsr": [
  {
   "sector": "qsr",
   "trimestre": "2026-2T",
   "sectorNombre": "Restaurantes / QSR",
   "label": "2T 2026",
   "labelAnterior": "1T 2026",
   "meses": "abr–jun 2026",
   "publicado": "18-sep-2026",
   "empresas": [
    {
     "id": "MCD",
     "nombre": "McDonald's"
    },
    {
     "id": "YUM",
     "nombre": "Yum! Brands"
    },
    {
     "id": "CMG",
     "nombre": "Chipotle"
    }
   ],
   "titulo": "El tráfico solo crece donde el value es consistente: McDonald's tropieza en EE.UU., Taco Bell y Chipotle ganan cuota y el vacuno sigue apretando márgenes",
   "tarjeta": "El tráfico solo crece donde el value es consistente; McDonald's tropieza en EE.UU. y el vacuno aprieta márgenes",
   "drivers": "tráfico y ticket · precios y value · inflación de comida y salarios · margen a nivel restaurante · aperturas · digital",
   "pregunta": {
    "q": "¿Se consolida el tráfico o el consumidor vuelve a retraerse?",
    "a": "Depende de la cadena más que del sector. McDonald's EE.UU. pierde visitas en cuanto reduce ofertas (comparables +0,8%, solo por ticket), mientras Taco Bell (+7%) y Chipotle (transacciones +1,0%) ganan tráfico con value y novedades. Según McDonald's, el tráfico de la industria sigue plano o negativo en sus grandes mercados: las cadenas que crecen lo hacen quitando cuota."
   },
   "takeaways": [
    {
     "lead": "Divergencia entre cadenas, no tendencia sectorial.",
     "texto": "Las comparables de McDonald's EE.UU. caen al +0,8% (+3,9% en el 1T) con visitas negativas; Taco Bell EE.UU. crece un 7%, noveno trimestre por encima de la industria, y Chipotle mejora al +2,2% con transacciones +1,0% (−4,9% un año antes)."
    },
    {
     "lead": "El value decide el tráfico, y la elasticidad al precio es alta.",
     "texto": "McDonald's atribuye dos tercios de su déficit de tráfico a una mala ejecución del value: solo el 60–65% del sistema aplicó los precios recomendados, se retiraron ofertas digitales y parte de los franquiciados subió precios. Los clientes fieles reaccionaron de inmediato."
    },
    {
     "lead": "El crecimiento global viene de aperturas en emergentes.",
     "texto": "KFC crece un 6% en ventas del sistema con un 7% más de unidades y comparables de solo +2%: EE.UU. cae un 2% y Europa queda plana, mientras Oriente Medio (+20%) e India (+16%) tiran. McDonald's retrasa a 2028 su objetivo de 50.000 restaurantes por el consumo presionado y el coste de desarrollo."
    },
    {
     "lead": "Los costes siguen por delante de los precios.",
     "texto": "El margen a nivel restaurante de Chipotle cae 220 pb (25,2%) por vacuno, fletes y raciones más generosas; el de los restaurantes propios de McDonald's en EE.UU. también retrocede. Taco Bell EE.UU. es la excepción (26,2%, +170 pb) gracias al apalancamiento de ventas."
    },
    {
     "lead": "Julio añade un shock de seguridad alimentaria.",
     "texto": "Un brote de cyclospora ligado a lechuga lleva las comparables de Taco Bell EE.UU. al −2% hasta el 27 de julio y resta unos 200 pb a Chipotle en la segunda mitad del mes; McDonald's EE.UU. cierra julio ligeramente en negativo por sus propios problemas."
    }
   ],
   "cambios": [
    {
     "kpi": "McDonald's EE.UU.",
     "dir": "Se frena",
     "texto": "Comparables de +3,9% en el 1T a +0,8% en el 2T, con visitas negativas y abril ya ligeramente negativo."
    },
    {
     "kpi": "Taco Bell EE.UU.",
     "dir": "Se mantiene",
     "texto": "Comparables de +8% en el 1T a +7% en el 2T, con margen de restaurante al alza."
    },
    {
     "kpi": "Chipotle",
     "dir": "Mejora",
     "texto": "Comparables de +0,5% a +2,2% y transacciones de +0,6% a +1,0%; sube la guía anual de comparables a un dígito bajo."
    },
    {
     "kpi": "Margen de restaurante",
     "dir": "Sigue bajo presión",
     "texto": "Chipotle mantiene una caída interanual de más de 200 pb (−250 pb en el 1T, −220 pb en el 2T); McDonald's EE.UU. retrocede por inflación de comida, papel y personal."
    },
    {
     "kpi": "Consumidor de renta baja",
     "dir": "Mixto",
     "texto": "En el 1T McDonald's hablaba de caída absoluta de visitas de renta baja. En el 2T Chipotle ve mejorar más a jóvenes y renta baja, mientras Yum! (en septiembre) observa algo menos de crecimiento en hogares de menos de 100.000 $."
    },
    {
     "kpi": "Seguridad alimentaria",
     "dir": "Nuevo riesgo",
     "texto": "El brote de cyclospora de julio no existía en el 1T y condiciona el arranque del 3T en Taco Bell y Chipotle."
    }
   ],
   "seguimiento": [
    {
     "kpi": "Tráfico frente a ticket",
     "dir": "Divergente",
     "texto": "McDonald's EE.UU. crece solo por ticket y mix; Chipotle gana transacciones (+1,0%) y Yum! afirma que Taco Bell creció en transacciones en todos los tramos de renta en el semestre."
    },
    {
     "kpi": "Renta baja y menús de value",
     "dir": "Mixto",
     "texto": "Donde el value se mantiene (Taco Bell, Chipotle) el cliente sensible al precio responde; donde se retira (McDonald's) se pierde de inmediato."
    },
    {
     "kpi": "Promociones y menús por menos de 3 $",
     "dir": "Funcionan si son consistentes",
     "texto": "Los drops de 1 $ de Taco Bell y el BOGO de Chipotle marcan récords; el menú de 10 productos por menos de 3 $ de McDonald's solo lo aplicó el 60–65% del sistema."
    },
    {
     "kpi": "Inflación de vacuno y salarios",
     "dir": "Persiste",
     "texto": "Chipotle cifra en +1,4 pp la inflación en coste de comida (vacuno y fletes) e inflación salarial de un dígito bajo; Yum! cita vacuno y salarios; McDonald's, comida, papel y personal."
    },
    {
     "kpi": "Margen frente a precios bajos",
     "dir": "Bajo presión",
     "texto": "Chipotle −220 pb; McDonald's EE.UU. propios a la baja. Chipotle espera que precios e inflación (~3%) se igualen desde el 4T."
    },
    {
     "kpi": "Digital, loyalty y delivery",
     "dir": "Avanza",
     "texto": "Yum! alcanza un 61% de mix digital sin Pizza Hut; McDonald's, 40.000 M$ de ventas a socios de loyalty en 12 meses (+20%); Chipotle, 38,3% de ventas digitales."
    },
    {
     "kpi": "EE.UU. frente a internacional",
     "dir": "Internacional mejor",
     "texto": "McDonald's crece más fuera (IOM +1,5%, IDL +1,9%) que en EE.UU. (+0,8%); KFC cae en EE.UU. y crece a doble dígito en emergentes. China sigue débil."
    }
   ],
   "scorecard": [
    {
     "titulo": "Resultados",
     "filas": [
      {
       "kpi": "Ingresos",
       "nota": "variación interanual",
       "v": {
        "MCD": {
         "v": "$7,10B · +4%",
         "c": "+2% a tipo constante; ventas del sistema ~$37B, +5%"
        },
        "YUM": {
         "v": "$2,17B · +12%",
         "c": "Ventas del sistema +5% sin divisa (+7% sin Pizza Hut)"
        },
        "CMG": {
         "v": "$3,35B · +9,3%",
         "c": "100 aperturas en el trimestre"
        }
       }
      },
      {
       "kpi": "Beneficio operativo",
       "v": {
        "MCD": {
         "v": "+4% (ajustado)",
         "c": "$3,39B; margen del 1S: 46,9% ajustado"
        },
        "YUM": {
         "v": "Core OP +5%",
         "c": "+8% sin Pizza Hut"
        },
        "CMG": {
         "v": "Margen 15,7%",
         "c": "2T25: 18,2%"
        }
       }
      },
      {
       "kpi": "BPA ajustado",
       "nota": "variación interanual",
       "v": {
        "MCD": {
         "v": "$3,38 · +6%",
         "c": "52 M$ de cargos de reestructuración excluidos"
        },
        "YUM": {
         "v": "$1,62 · +12%",
         "c": "GAAP $3,08 por un beneficio fiscal de 449 M$"
        },
        "CMG": {
         "v": "$0,33 · plano",
         "c": "GAAP $0,32"
        }
       }
      }
     ]
    },
    {
     "titulo": "Indicadores sectoriales",
     "filas": [
      {
       "kpi": "Ventas comparables",
       "v": {
        "MCD": {
         "v": "+1,3% global",
         "c": "EE.UU. +0,8% · IOM +1,5% · IDL +1,9%"
        },
        "YUM": {
         "v": "+3% global",
         "c": "Taco Bell +7% · KFC +2% · Pizza Hut −1%"
        },
        "CMG": {
         "v": "+2,2%",
         "c": "1T26: +0,5% · 2T25: −4,0%"
        }
       }
      },
      {
       "kpi": "Tráfico y ticket",
       "v": {
        "MCD": {
         "v": "Visitas EE.UU. negativas",
         "c": "Crecimiento solo por ticket y mix"
        },
        "YUM": {
         "v": "N/D",
         "c": "No publica tráfico"
        },
        "CMG": {
         "v": "Transacciones +1,0%",
         "c": "Ticket +1,2% (precio +1,6%, mix −0,4%)"
        }
       }
      },
      {
       "kpi": "Margen a nivel restaurante",
       "v": {
        "MCD": {
         "v": "EE.UU. propios, a la baja",
         "c": "Beneficio −6% por inflación de costes"
        },
        "YUM": {
         "v": "Taco Bell EE.UU. 26,2%",
         "c": "+170 pb; KFC 12,0%"
        },
        "CMG": {
         "v": "25,2%",
         "c": "−220 pb interanual"
        }
       }
      },
      {
       "kpi": "Costes",
       "nota": "inflación citada",
       "v": {
        "MCD": {
         "v": "Comida, papel y personal",
         "c": "Sin cifra"
        },
        "YUM": {
         "v": "Vacuno y salarios",
         "c": "Sin cuantificar (10-Q)"
        },
        "CMG": {
         "v": "Comida +1,4 pp",
         "c": "Vacuno y fletes; ~3% previsto en el 3T"
        }
       }
      },
      {
       "kpi": "Unidades",
       "v": {
        "MCD": {
         "v": "46.028 · +1.915",
         "c": "Interanual; China +887"
        },
        "YUM": {
         "v": "64.166 · +5%",
         "c": "1.053 aperturas brutas en el trimestre"
        },
        "CMG": {
         "v": "4.186 propios",
         "c": "100 aperturas (80 con Chipotlane)"
        }
       }
      },
      {
       "kpi": "Digital y loyalty",
       "v": {
        "MCD": {
         "v": "Loyalty $40B (12 meses)",
         "c": "+20%; ~220 M de usuarios activos"
        },
        "YUM": {
         "v": "Mix digital 61%",
         "c": "Sin Pizza Hut; KFC 67%, Taco Bell 47%"
        },
        "CMG": {
         "v": "38,3% de las ventas",
         "c": "2T25: 35,5%"
        }
       }
      }
     ]
    }
   ],
   "scorecardNota": "B = miles de millones. Variaciones según las publica cada compañía. McDonald's no publica tráfico ni el margen de restaurante en porcentaje; Yum! agrega marcas con calendarios distintos (Taco Bell EE.UU. reporta por periodos de 12 semanas).",
   "companias": [
    {
     "e": "MCD",
     "nombre": "McDonald's",
     "titular": "Tropiezo en EE.UU. por la ejecución del value",
     "texto": "Comparables +1,3% (EE.UU. +0,8%) con visitas negativas en EE.UU. y julio ligeramente en negativo. La dirección lo atribuye sobre todo a su propia ejecución: *no tenemos un problema de estrategia*. El beneficio aguanta (BPA ajustado +6%) gracias al modelo franquiciado. Retrasa a 2028 el objetivo de 50.000 restaurantes."
    },
    {
     "e": "YUM",
     "nombre": "Yum! Brands",
     "titular": "Taco Bell gana cuota; KFC crece por aperturas",
     "texto": "Taco Bell EE.UU. +7% en comparables y margen de restaurante del 26,2%. KFC crece un 6% en ventas por aperturas en emergentes, con EE.UU. −2%. Firma la venta de Pizza Hut (~2.300 M$ netos) y aprueba recompras por 4.000 M$. El brote de julio lleva a Taco Bell EE.UU. a −2%."
    },
    {
     "e": "CMG",
     "nombre": "Chipotle",
     "titular": "Vuelve el tráfico, no el margen",
     "texto": "Comparables +2,2% con transacciones +1,0%, segundo trimestre de mejora; eleva la guía anual de comparables. El margen a nivel restaurante cae 220 pb por vacuno, fletes y raciones más generosas. En la segunda mitad de julio las comparables pierden unos 200 pb."
    }
   ],
   "exhibits": [
    {
     "titulo": "Las comparables divergen: McDonald's EE.UU. se frena mientras Taco Bell y Chipotle aguantan",
     "sub": "Ventas comparables, %. McDonald's: EE.UU.; Yum!: Taco Bell EE.UU.",
     "tipo": "bar",
     "unidad": "%",
     "dec": 1,
     "trimestres": [
      "2T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "MCD": [
       2.5,
       3.9,
       0.8
      ],
      "YUM": [
       4,
       8,
       7
      ],
      "CMG": [
       -4.0,
       0.5,
       2.2
      ]
     },
     "fuente": "notas de resultados de las compañías."
    },
    {
     "titulo": "Chipotle encadena dos trimestres de mejora tras un 2025 negativo",
     "sub": "Chipotle: ventas comparables, %",
     "tipo": "bar",
     "unidad": "%",
     "dec": 1,
     "trimestres": [
      "2T25",
      "3T25",
      "4T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "CMG": [
       -4.0,
       0.3,
       -2.5,
       0.5,
       2.2
      ]
     },
     "fuente": "nota de resultados de Chipotle (serie de cinco trimestres)."
    },
    {
     "titulo": "KFC crece en emergentes y se estanca en los mercados maduros",
     "sub": "KFC: ventas del sistema sin divisa, variación interanual en el 2T26, %",
     "tipo": "bar",
     "unidad": "%",
     "dec": 0,
     "trimestres": [
      "EE.UU.",
      "Canadá",
      "Europa",
      "Australia",
      "China",
      "Asia",
      "Latam",
      "R. Unido",
      "India",
      "O. Medio"
     ],
     "series": {
      "YUM": [
       -2,
       -1,
       0,
       5,
       6,
       10,
       10,
       10,
       16,
       20
      ]
     },
     "fuente": "nota de resultados de Yum! Brands."
    }
   ],
   "temas": [
    {
     "titulo": "Value: la variable que decide el tráfico",
     "parrafos": [
      "El trimestre es casi un experimento natural. McDonald's lanzó en EE.UU. un menú de diez productos por menos de 3 $ que solo aplicó el 60–65% de su sistema, recortó a la vez ofertas digitales y eliminó una promoción muy usada por sus clientes más fieles; parte de los franquiciados, además, subió precios. El resultado fue una pérdida de visitas inmediata, que la compañía cifra en dos tercios de su déficit de tráfico frente a lo esperado.",
      "En el lado contrario, Taco Bell sostiene una arquitectura de precios con productos de 1 $ y logra los dos mejores drops de su historia, y Chipotle combina promociones (su BOGO del Mundial fue un récord de ventas diarias) con más proteína por ración. La conclusión es que el consumidor sigue comiendo fuera, pero **premia la consistencia en el value y castiga de inmediato cualquier retirada**."
     ],
     "evidencias": [
      {
       "e": "MCD",
       "t": "Las puntuaciones de value y asequibilidad mejoran 7–8 puntos, pero las visitas en EE.UU. caen; la compañía reforzará ofertas digitales y marketing en el 2S."
      },
      {
       "e": "YUM",
       "t": "Taco Bell EE.UU. supera a la industria por noveno trimestre; mix digital del 47% (+5 pp) y más de 10 productos por debajo de 3 $."
      },
      {
       "e": "CMG",
       "t": "La percepción de valor mejora en todos los grupos de renta y edad; la asequibilidad está en máximos de un par de años según su propio seguimiento de marca."
      }
     ]
    },
    {
     "titulo": "Márgenes: el vacuno y los salarios siguen por delante de los precios",
     "parrafos": [
      "La presión de costes no afloja. Chipotle detalla un +1,4 pp de inflación en comida (vacuno y fletes), otro +0,5 pp por raciones más generosas, inflación salarial y más marketing, frente a una subida de precios de carta de solo el 1,6%. McDonald's habla de presiones en comida, papel y personal, y Yum! cita vacuno y salarios en su 10-Q.",
      "Solo el crecimiento de ventas compensa: Taco Bell EE.UU. mejora 170 pb su margen por apalancamiento operativo. Chipotle espera que precios e inflación (~3%) se igualen a partir del 4T, lo que apunta a una capacidad de traslado de costes todavía limitada."
     ],
     "evidencias": [
      {
       "e": "MCD",
       "t": "Beneficio de restaurantes propios en EE.UU. −6% por \"ongoing inflationary cost pressures\"; el 90% de sus márgenes procede de franquicias."
      },
      {
       "e": "YUM",
       "t": "Margen de restaurante de Taco Bell EE.UU. 26,2% (+170 pb), 60 pb de ellos por los restaurantes adquiridos."
      },
      {
       "e": "CMG",
       "t": "Coste de comida 29,7% de las ventas (28,9% un año antes); personal 25,0% (24,7%)."
      }
     ]
    },
    {
     "titulo": "Crecimiento: las aperturas en emergentes compensan unos mercados maduros estancados",
     "parrafos": [
      "Fuera de EE.UU. el patrón es claro: los mercados maduros crecen poco y los emergentes sostienen el volumen con aperturas. KFC crece un 6% en ventas del sistema con comparables de solo +2%, apoyado en Oriente Medio, India, Asia y Latinoamérica, mientras EE.UU., Canadá y Europa se estancan. McDonald's ve el tráfico de la industria plano o negativo en varios de sus grandes mercados y China débil.",
      "La señal más relevante es la de McDonald's: retrasa un año su objetivo de 50.000 restaurantes por el entorno de consumo presionado y la inflación de los costes de desarrollo, un reconocimiento explícito de que el ciclo de consumo pesa en los planes de inversión."
     ],
     "evidencias": [
      {
       "e": "MCD",
       "t": "IOM +1,5% (Alemania, Australia y Reino Unido positivos; Francia negativa) e IDL +1,9% (Japón lidera; China negativa)."
      },
      {
       "e": "YUM",
       "t": "KFC: 660 aperturas en 55 países en el trimestre; el 88% de sus ventas del sistema está fuera de EE.UU."
      },
      {
       "e": "CMG",
       "t": "Europa crece a un dígito alto en cada país; primera apertura en México con Alsea."
      }
     ]
    },
    {
     "titulo": "Julio: la seguridad alimentaria se suma a un consumidor cauto",
     "parrafos": [
      "El trimestre en curso arranca con un golpe ajeno a la demanda de fondo: un brote de cyclospora vinculado a lechuga de un proveedor. Taco Bell llegó a perder cerca de un 20% de ventas el fin de semana del 18 de julio y cierra el mes con comparables del −2%; Chipotle, que no usa el producto afectado, pierde igualmente unos 200 pb por la cautela general hacia el sector.",
      "Chipotle habla en su 10-Q de vientos en contra de un dígito bajo por el entorno de consumo, la seguridad alimentaria y la geopolítica. Es una muestra de lo **sensible que es la demanda discrecional de bajo importe** a cualquier noticia negativa."
     ],
     "evidencias": [
      {
       "e": "YUM",
       "t": "Guía de margen de los restaurantes propios de Taco Bell EE.UU. para el 3T: 19–21% (26,2% en el 2T)."
      },
      {
       "e": "CMG",
       "t": "Guía de comparables del 3T en torno a +1%, con una tendencia subyacente de ~+3% sin el efecto del brote."
      },
      {
       "e": "MCD",
       "t": "Julio ligeramente negativo en EE.UU. por sus propios problemas de ejecución, no por el brote."
      }
     ]
    }
   ],
   "citas": [
    {
     "texto": "We don't have a strategy problem. We simply didn't execute at the level we needed to in the second quarter.",
     "quien": "Chris Kempczinski, CEO",
     "contexto": "McDonald's, call del 2T26"
    },
    {
     "texto": "Value isn't just about discounting and price point.",
     "quien": "Scott Boatwright, CEO",
     "contexto": "Chipotle, call del 2T26"
    }
   ],
   "pulso": {
    "etiqueta": "Después del trimestre · julio y conferencia de Yum! del 9 de septiembre",
    "titulo": "El brote de julio se va absorbiendo y el entorno de precios mejora ligeramente",
    "parrafos": [
     "En la conferencia de Barclays del 9 de septiembre, Yum! describe un consumidor estadounidense *resiliente y diligente*, con más fuerza en rentas altas y algo menos de crecimiento en hogares de menos de 100.000 $. La recuperación de Taco Bell va según lo previsto, con varios días de ventas positivas en EE.UU., y la compañía percibe un entorno de precios algo más favorable porque se estrecha la brecha entre la inflación de comer fuera y la de comer en casa.",
     "McDonald's, por su parte, prepara más ofertas digitales y marketing para el segundo semestre y celebra su Investor Day el 23 de septiembre."
    ],
    "bullets": [
     {
      "e": "YUM",
      "t": "La divergencia entre ganadores y perdedores del sector *nunca ha sido mayor*, según su CFO. Considera reales los efectos de los GLP-1 sobre raciones y hábitos."
     },
     {
      "e": "CMG",
      "t": "Guía del 3T: comparables ~+1%, precios ~2,5% e inflación de comida ~3%."
     },
     {
      "e": "MCD",
      "t": "Espera que IOM e IDL aceleren en el 3T; EE.UU. sin cambios de calendario de marketing hasta el 4T."
     }
    ]
   },
   "macroIntro": "Los restaurantes describen un consumidor que sigue saliendo a comer pero con **frecuencia estancada y alta sensibilidad al precio**: el tráfico se gana con value y novedades, no con subidas de precio.",
   "macro": [
    {
     "tema": "Consumo",
     "texto": "Tráfico de la industria plano o negativo en grandes mercados; las cadenas que crecen quitan cuota. La respuesta a cualquier cambio de precio u oferta es inmediata, señal de un gasto discrecional muy vigilado.",
     "vs": "Frente al 1T: sin mejora de fondo y mayor divergencia entre cadenas."
    },
    {
     "tema": "Precios e inflación",
     "texto": "Inflación de vacuno, fletes y personal por encima de los precios de carta. Chipotle espera igualar precios e inflación (~3%) en el 4T y Yum! ve estrecharse la brecha entre comer fuera y comer en casa.",
     "vs": "Frente al 1T: la presión de costes persiste; algo más de margen para subir precios."
    },
    {
     "tema": "Empleo y salarios",
     "texto": "Inflación salarial de un dígito bajo y rotación de gerentes en mínimos de varios años en Chipotle: un mercado laboral de hostelería menos tenso.",
     "vs": "Frente al 1T: sin cambios relevantes."
    },
    {
     "tema": "Renta de los hogares",
     "texto": "Señales mixtas: Chipotle ve mejorar más a jóvenes y renta baja; Yum! observa algo menos de crecimiento bajo 100.000 $ y fuerza en rentas altas.",
     "vs": "Frente al 1T: la presión sobre la renta baja parece contenerse, sin revertirse."
    },
    {
     "tema": "Internacional",
     "texto": "Emergentes (Oriente Medio, India, Asia, Latinoamérica) crecen a doble dígito; China sigue débil y deflacionaria; Europa, desigual.",
     "vs": "Frente al 1T: patrón similar."
    }
   ],
   "vigilar": [
    "Recuperación del tráfico de Taco Bell y Chipotle tras el brote de cyclospora.",
    "Si McDonald's recupera visitas en EE.UU. con el value y qué anuncia en su Investor Day (23-sep).",
    "Traslado de costes: precios de carta frente a inflación de vacuno (Chipotle espera igualarlos en el 4T).",
    "Consumidor de renta baja con la gasolina alta.",
    "Aperturas en emergentes frente al estancamiento de los mercados maduros.",
    "Efecto de los GLP-1 en raciones, bebidas y snacks."
   ],
   "proximo": "Próximos resultados: 3T 2026, entre finales de octubre y principios de noviembre.",
   "cobertura": [
    {
     "empresa": "McDonald's",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "4-ago-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/63908/000006390826000067/exhibit991-6302026.htm"
      },
      {
       "t": "Suplemento",
       "url": "https://www.sec.gov/Archives/edgar/data/63908/000006390826000067/exhibit992-6302026.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/63908/000006390826000073/mcd-20260630.htm"
      },
      {
       "t": "Call 4-ago"
      }
     ]
    },
    {
     "empresa": "Yum! Brands",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "30-jul-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/1041061/000104106126000149/a8kex9917302026.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/1041061/000104106126000160/yum-20260630.htm"
      },
      {
       "t": "Call 30-jul y conferencia 9-sep"
      }
     ]
    },
    {
     "empresa": "Chipotle",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "29-jul-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/1058090/000105809026000063/cmg-20260729xex991.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/1058090/000105809026000066/cmg-20260630.htm"
      },
      {
       "t": "Call 29-jul"
      }
     ]
    }
   ],
   "metodo": "Trimestre natural: cada compañía se asigna al trimestre natural con el que comparte más días de su periodo fiscal (las tres cierran en junio). Taco Bell EE.UU. y otras filiales de Yum! reportan por periodos de 12 semanas. Cifras según las publican las compañías. Lo ocurrido en julio y en septiembre se refiere al 3T y se presenta por separado.",
   "glosario": [
    {
     "t": "Comparables (SSS)",
     "d": "Ventas de restaurantes abiertos al menos un periodo mínimo; mide el crecimiento orgánico."
    },
    {
     "t": "Tráfico / transacciones",
     "d": "Número de visitas o pedidos; mejor señal de demanda real que el ticket."
    },
    {
     "t": "Ticket medio",
     "d": "Importe medio por pedido; sube por precio, mix o cesta más grande."
    },
    {
     "t": "Ventas del sistema",
     "d": "Ventas totales de la marca, incluidos los restaurantes franquiciados."
    },
    {
     "t": "Margen a nivel restaurante",
     "d": "Margen tras costes directos del restaurante: comida, envases, personal y ocupación."
    },
    {
     "t": "Value",
     "d": "Propuesta de precio bajo (menús económicos, ofertas) para captar al cliente sensible al precio."
    },
    {
     "t": "IOM / IDL",
     "d": "Mercados internacionales de McDonald's operados directamente / con licencia."
    }
   ]
  }
 ],
 "retail": [
  {
   "sector": "retail",
   "trimestre": "2026-2T",
   "sectorNombre": "Retail Value",
   "label": "2T 2026",
   "labelAnterior": "1T 2026",
   "meses": "abr–jun 2026",
   "publicado": "18-sep-2026",
   "empresas": [
    {
     "id": "WMT",
     "nombre": "Walmart"
    },
    {
     "id": "COST",
     "nombre": "Costco"
    },
    {
     "id": "DG",
     "nombre": "Dollar General"
    }
   ],
   "titulo": "Con la gasolina por encima de 4 $, el value gana visitas pero no cesta: el discrecional se enfría y las devoluciones de aranceles se reinvierten en precio",
   "tarjeta": "El value gana visitas con la gasolina por encima de 4 $; el ticket se modera y los aranceles devueltos van a precio",
   "drivers": "tráfico y ticket · comparables sin gasolina · mix alimentación / discrecional · trade-down por renta · precios y aranceles · combustible y costes · membresía y digital",
   "pregunta": {
    "q": "¿Resiste el tráfico de los formatos value ahora que la gasolina supera los 4 $ por galón?",
    "a": "Sí, pero cambia la forma de comprar. Las visitas crecen en los tres (Walmart U.S. +1,5%, Dollar General +2,0%, Costco +3,2% en junio), mientras el ticket se modera o se apoya en precio y no en unidades. El cliente compra más a menudo y gasta menos en cada visita; el discrecional es lo primero que se resiente."
   },
   "takeaways": [
    {
     "lead": "El tráfico aguanta; el ticket se estrecha.",
     "texto": "Walmart U.S. crece un 1,5% en transacciones y un 1,1% en ticket (+3,1% un año antes); Sam's Club, +7,0% de tráfico y −2,5% de ticket. En Dollar General el ticket sube un 1,5%, pero por precio medio: los artículos por cesta bajan. Costco mantiene visitas positivas los tres meses (+3,2%, +3,6% y +2,5%)."
    },
    {
     "lead": "Dollar General acelera y Walmart U.S. se frena.",
     "texto": "Las comparables de Dollar General pasan de +2,0% en el 1T a +3,5%, con el quinto trimestre seguido de tráfico positivo. Walmart U.S. baja de +4,1% a +2,6%, con unos 125 pb de arrastre por la regulación de precios de fármacos (MFP); sin Health & Wellness, +3,4%."
    },
    {
     "lead": "El discrecional se enfría en Walmart tras los estímulos fiscales del 1T.",
     "texto": "General merchandise crece a un dígito bajo en comparables y sus ventas avanzan un 0,9% (calculado) frente al 4,3% de grocery (calculado). La dirección habla de *trade-offs* visibles en junio, con la gasolina por encima de 4 $. En Dollar General, en cambio, los no consumibles crecen un 4,5% por sexto trimestre por encima de los consumibles."
    },
    {
     "lead": "Las devoluciones de aranceles inflan el margen del trimestre y se reinvierten en precio.",
     "texto": "Walmart cobra ~$2,9B de aranceles IEEPA, que aportan ~750 pb al crecimiento de su beneficio operativo (+28,8%); Dollar General estima ~81 pb de margen bruto y ~$0,25 de BPA. Ambos los destinan a precio y promociones: los rollbacks de Walmart pasan de ~7.200 a más de 11.000."
    },
    {
     "lead": "El trade-down sube por la escala de renta.",
     "texto": "Walmart gana cuota en todos los tramos de renta, *led by upper-income households*; Dollar General describe una entrada de hogares de más de 100.000 $ que ha pasado de esporádica a diaria."
    }
   ],
   "cambios": [
    {
     "kpi": "Walmart U.S.",
     "dir": "Se frena",
     "texto": "Comparables de +4,1% en el 1T a +2,6% en el 2T; tráfico de +3% a +1,5%. El arrastre de farmacia (MFP) resta ~125 pb y el general merchandise pierde el impulso de los reembolsos fiscales."
    },
    {
     "kpi": "Dollar General",
     "dir": "Acelera",
     "texto": "Comparables de +2,0% a +3,5%, tráfico de +1,4% a +2,0% y ticket de +0,5% a +1,5%. El ticket sube por precio medio, no por más artículos."
    },
    {
     "kpi": "Costco",
     "dir": "Se modera",
     "texto": "Comparables sin gasolina ni FX del 6,6% en su 3T fiscal (hasta el 10-may) al 7,0% en junio, 6,6% en julio y 5,4% en agosto; algo menos de 75 pb del último dato se deben al calendario de Labor Day."
    },
    {
     "kpi": "Margen bruto",
     "dir": "Mejora por un efecto puntual",
     "texto": "Walmart pasa del 24,3% al 25,4% y Dollar General del 31,6% al 32,6%, en ambos casos con devoluciones de aranceles (~$2,9B y ~81 pb). Sin ellas, Dollar General mejora ~46 pb interanuales (calculado)."
    },
    {
     "kpi": "Combustible",
     "dir": "Se intensifica",
     "texto": "En el 1T era un coste de margen (−175 M$ en Walmart). En el 2T la gasolina supera los 4 $, Walmart prevé más de $2B de costes adicionales en el año y el precio por galón de Costco sube un 22–26% interanual."
    },
    {
     "kpi": "Guía anual",
     "dir": "Se eleva",
     "texto": "Walmart sube su BPA ajustado de FY27 a $2,80–2,87 ($2,75–2,85); Dollar General, su BPA de 2026 a ~$7,80–8,00 ($7,20–7,45), con ~$0,25 de aranceles, y reanuda recompras por hasta 700 M$."
    }
   ],
   "seguimiento": [
    {
     "kpi": "¿Se mantiene la recuperación del general merchandise de Walmart?",
     "dir": "No se sostiene",
     "texto": "En el 1T su mix fue positivo por primera vez en 18 trimestres. En el 2T crece a un dígito bajo en comparables, sus ventas suben un 0,9% (calculado) y su peso baja al 23,7% desde el 24,4% (calculado)."
    },
    {
     "kpi": "¿Crece el ticket de Costco sin deteriorar el tráfico?",
     "dir": "Sí, con menos ticket",
     "texto": "El tráfico mundial mejora (+3,2%, +3,6% y +2,5% en jun–ago, frente a +2,4% en su 3T fiscal), pero el ticket sin gasolina ni FX se modera del +4,2% a +3,7%, +2,9% y +2,8%."
    },
    {
     "kpi": "¿Sube el ticket de Dollar General o depende solo de las visitas?",
     "dir": "Sube, por precio",
     "texto": "El ticket pasa de +0,5% a +1,5%, impulsado por precios medios más altos y compensado en parte por menos artículos por transacción. El tráfico sigue siendo el motor (+2,0%)."
    },
    {
     "kpi": "Consumidor de renta baja",
     "dir": "Sigue presionado",
     "texto": "Dollar General describe a su cliente principal como *financially constrained*: sigue empleado, con alguna subida de ingresos, pero la compensan la inflación y la gasolina. Walmart: sus clientes «todavía sienten presión»."
    },
    {
     "kpi": "Combustible: márgenes y gasto",
     "dir": "Pesa más",
     "texto": "Walmart eleva a más de $2B los costes adicionales de combustible del año; el transporte de Dollar General supera lo previsto y pesa más que en el 1T."
    },
    {
     "kpi": "Trade-down de rentas medias y altas",
     "dir": "Se amplía",
     "texto": "Walmart gana cuota liderada por hogares de renta alta; en Dollar General la entrada de hogares de más de 100.000 $ se ha vuelto diaria. Costco no ofrece datos por renta."
    },
    {
     "kpi": "Marca propia",
     "dir": "Avanza en Walmart; sin datos en el resto",
     "texto": "El peso de la marca propia en general merchandise de Walmart sube 130 pb y Member's Mark crece a un dígito medio. Dollar General se apoya más en el precio de 1 $ (Value Valley, comparables >16%) que en marcas propias; Costco no da datos de Kirkland en sus ventas mensuales."
    }
   ],
   "scorecard": [
    {
     "titulo": "Resultados",
     "filas": [
      {
       "kpi": "Ventas / ingresos",
       "nota": "variación interanual",
       "v": {
        "WMT": {
         "v": "$187,9B · +5,9%",
         "c": "+5,1% a tipo constante; 1T: $177,8B"
        },
        "COST": {
         "v": "Junio: $29,24B · +10,6%",
         "c": "Julio $23,12B (+10,7%); agosto $23,70B (+9,9%)"
        },
        "DG": {
         "v": "$11,29B · +5,2%",
         "c": "Acumulado 26 semanas: +4,3%"
        }
       }
      },
      {
       "kpi": "Margen bruto",
       "v": {
        "WMT": {
         "v": "25,4% · +96 pb",
         "c": "1T: 24,3%; incluye ~$2,9B de aranceles devueltos"
        },
        "COST": {
         "v": "N/D",
         "c": "4T fiscal, publicación el 24-sep"
        },
        "DG": {
         "v": "32,6% · +127 pb",
         "c": "~81 pb por aranceles; 1T: 31,6%"
        }
       }
      },
      {
       "kpi": "Beneficio operativo",
       "nota": "variación interanual",
       "v": {
        "WMT": {
         "v": "$9,38B · +28,8%",
         "c": "Ajustado a tipo constante +17,4%; ~750 pb por aranceles"
        },
        "COST": {
         "v": "N/D",
         "c": "4T fiscal, publicación el 24-sep"
        },
        "DG": {
         "v": "769 M$ · +29,2%",
         "c": "Margen 6,81% (+126 pb); ~66 pb por aranceles"
        }
       }
      },
      {
       "kpi": "BPA",
       "nota": "variación interanual",
       "v": {
        "WMT": {
         "v": "Ajustado $0,81 · +19,1%",
         "c": "GAAP $0,80 (−9,1%); 1T: $0,66"
        },
        "COST": {
         "v": "N/D",
         "c": "4T fiscal, publicación el 24-sep"
        },
        "DG": {
         "v": "$2,48 · +33,3%",
         "c": "~$0,25 por aranceles; sin ellos $2,23 (calculado)"
        }
       }
      },
      {
       "kpi": "Guía de BPA anual",
       "v": {
        "WMT": {
         "v": "$2,80–2,87 (ajustado)",
         "c": "Antes $2,75–2,85; 3T: $0,62–0,64"
        },
        "COST": {
         "v": "N/D",
         "c": "No da guía"
        },
        "DG": {
         "v": "~$7,80–8,00",
         "c": "Antes $7,20–7,45; incluye ~$0,25 de aranceles"
        }
       }
      }
     ]
    },
    {
     "titulo": "Indicadores sectoriales",
     "filas": [
      {
       "kpi": "Ventas comparables",
       "nota": "Costco: jun / jul / ago, con gasolina y FX",
       "v": {
        "WMT": {
         "v": "U.S. +2,6%",
         "c": "1T: +4,1%; sin Health & Wellness +3,4%"
        },
        "COST": {
         "v": "8,8% / 8,9% / 8,4%",
         "c": "EE.UU.: 10,6% / 10,3% / 9,0%"
        },
        "DG": {
         "v": "+3,5%",
         "c": "1T: +2,0%; 2T25: +2,8%"
        }
       }
      },
      {
       "kpi": "Otros comparables",
       "nota": "Walmart: Sam's Club; Costco: sin gasolina ni FX",
       "v": {
        "WMT": {
         "v": "Sam's +4,4% sin combustible",
         "c": "Con combustible +8,5%; 1T: +3,9%"
        },
        "COST": {
         "v": "7,0% / 6,6% / 5,4%",
         "c": "Sin gasolina ni FX; agosto, −<75 pb por Labor Day"
        },
        "DG": {
         "v": "Value Valley (1 $) >16%",
         "c": "Más de 600 artículos rotativos a 1 $"
        }
       }
      },
      {
       "kpi": "Tráfico",
       "v": {
        "WMT": {
         "v": "U.S. +1,5%",
         "c": "Sam's +7,0%; 1T U.S.: +3%"
        },
        "COST": {
         "v": "+3,2% / +3,6% / +2,5%",
         "c": "Mundial; EE.UU. +3,2% / +3,3% / +2,3%"
        },
        "DG": {
         "v": "+2,0%",
         "c": "Quinto trimestre positivo; 1T: +1,4%"
        }
       }
      },
      {
       "kpi": "Ticket medio",
       "v": {
        "WMT": {
         "v": "U.S. +1,1%",
         "c": "2T25: +3,1%; Sam's −2,5%"
        },
        "COST": {
         "v": "+3,7% / +2,9% / +2,8%",
         "c": "Sin gasolina ni FX; con ellos +5,5% / +5,1% / +5,7%"
        },
        "DG": {
         "v": "+1,5%",
         "c": "Más precio medio, menos artículos por cesta; 1T: +0,5%"
        }
       }
      },
      {
       "kpi": "Discrecional",
       "v": {
        "WMT": {
         "v": "General merchandise: un dígito bajo",
         "c": "Ventas +0,9% (calculado); grocery: un dígito medio"
        },
        "COST": {
         "v": "Non-Foods: un dígito medio",
         "c": "Junio, medio-alto; joyería y hogar entre los mejores"
        },
        "DG": {
         "v": "No consumibles +4,5%",
         "c": "Sexto trimestre por encima de consumibles"
        }
       }
      },
      {
       "kpi": "Digital",
       "v": {
        "WMT": {
         "v": "E-commerce global +23%",
         "c": "U.S. +24%; ~510 pb del comparable"
        },
        "COST": {
         "v": "+20,9% / +17,7% / +17,9%",
         "c": "Comparables digitales con gasolina y FX"
        },
        "DG": {
         "v": "Delivery ~40 pb del comparable",
         "c": "~80% de incrementalidad"
        }
       }
      },
      {
       "kpi": "Membresía",
       "v": {
        "WMT": {
         "v": "Cuotas globales +17%",
         "c": "Sam's +6% tras subir la cuota el 1-may"
        },
        "COST": {
         "v": "N/D",
         "c": "4T fiscal, publicación el 24-sep"
        },
        "DG": {
         "v": "N/D",
         "c": "Piloto de fidelización a finales de año"
        }
       }
      },
      {
       "kpi": "Combustible",
       "v": {
        "WMT": {
         "v": ">$2B de costes adicionales",
         "c": "Previsión anual frente a la guía inicial"
        },
        "COST": {
         "v": "Galón +22,4% / +25,2% / +25,8%",
         "c": "Suma ~2,5–2,9 pp al comparable publicado"
        },
        "DG": {
         "v": "Transporte por encima de lo previsto",
         "c": "Gasolina a ~4 $/galón o más según el estado"
        }
       }
      },
      {
       "kpi": "Inventario",
       "nota": "variación interanual",
       "v": {
        "WMT": {
         "v": "+6,7%",
         "c": "+6,0% a tipo constante; U.S. +6,3%"
        },
        "COST": {
         "v": "N/D",
         "c": "4T fiscal, publicación el 24-sep"
        },
        "DG": {
         "v": "−2,7% por tienda",
         "c": "Rotación 4,6x (4,3x)"
        }
       }
      }
     ]
    }
   ],
   "scorecardNota": "B = miles de millones. Variaciones según las publica cada compañía; lo marcado «(calculado)» es cálculo propio. Walmart y Dollar General: trimestre fiscal may–jul 2026. **Costco: no hay trimestre fiscal en el periodo; sus celdas recogen las ventas mensuales de junio (5 semanas), julio y agosto (4 semanas cada uno)**, y solo junio pertenece al trimestre natural. Las comparables de Costco con gasolina y FX no son homogéneas con las de Walmart U.S. (sin combustible).",
   "companias": [
    {
     "e": "WMT",
     "nombre": "Walmart",
     "titular": "Beneficio inflado por aranceles; EE.UU. se modera",
     "texto": "Walmart U.S. crece un 2,6% en comparables (+3,4% sin Health & Wellness) con tráfico +1,5%, y el general merchandise pierde tracción. El beneficio operativo sube un 28,8% con ~$2,9B de devoluciones de aranceles, que **no se ajustan**; sin ellas, el crecimiento queda en la parte alta del rango del 7–10%. Eleva la guía solo «modestamente»: ve al consumidor *arguably softer* que en febrero."
    },
    {
     "e": "COST",
     "nombre": "Costco",
     "titular": "Sin trimestre en el periodo: ventas mensuales sólidas que se moderan",
     "texto": "Sus comparables sin gasolina ni FX bajan del 7,0% en junio al 5,4% en agosto, con algo menos de 75 pb de efecto calendario en el último mes. El tráfico sigue positivo. Resultados del 4T fiscal (16 semanas, may–ago) el 24-sep."
    },
    {
     "e": "DG",
     "nombre": "Dollar General",
     "titular": "Más visitas, más renta alta y un margen con ayuda puntual",
     "texto": "Comparables +3,5% con tráfico +2,0% y no consumibles +4,5%. El margen bruto sube 127 pb, ~81 pb por aranceles; el resto, por shrink, mermas y distribución. Eleva la guía de BPA y adelanta un año la vuelta de las recompras (hasta 700 M$ en el 2S)."
    }
   ],
   "exhibits": [
    {
     "titulo": "Walmart U.S. baja al +2,6% tras cuatro trimestres por encima del 4%",
     "sub": "Walmart U.S.: ventas comparables sin combustible, %. Trimestres fiscales asignados al natural (2T26 = may–jul 2026)",
     "tipo": "bar",
     "unidad": "%",
     "dec": 1,
     "trimestres": [
      "2T25",
      "3T25",
      "4T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "WMT": [
       4.6,
       4.5,
       4.6,
       4.1,
       2.6
      ]
     },
     "fuente": "presentación financiera de Walmart del 2T FY27 (serie de cinco trimestres)."
    },
    {
     "titulo": "En Walmart y Dollar General las visitas pesan más que el ticket; Costco crece por ambos",
     "sub": "Variación interanual en el 2T, %. Walmart: Walmart U.S.; Costco: junio (5 semanas), mundial, ticket sin gasolina ni FX",
     "tipo": "bar",
     "unidad": "%",
     "dec": 1,
     "trimestres": [
      "Tráfico",
      "Ticket medio"
     ],
     "series": {
      "WMT": [
       1.5,
       1.1
      ],
      "COST": [
       3.2,
       3.7
      ],
      "DG": [
       2.0,
       1.5
      ]
     },
     "fuente": "notas de resultados de Walmart y Dollar General; call de ventas de junio de Costco."
    },
    {
     "titulo": "Costco modera sus comparables subyacentes de junio a agosto, con el calendario restando en el último mes",
     "sub": "Costco: ventas comparables totales sin gasolina ni FX, %",
     "tipo": "line",
     "unidad": "%",
     "dec": 1,
     "trimestres": [
      "Jun 26",
      "Jul 26",
      "Ago 26"
     ],
     "series": {
      "COST": [
       7.0,
       6.6,
       5.4
      ]
     },
     "fuente": "calls de ventas mensuales de Costco (8-jul, 5-ago y 2-sep-2026). Agosto incluye algo menos de 75 pb de impacto negativo por Labor Day."
    },
    {
     "titulo": "El margen bruto de Walmart salta en el 2T por las devoluciones de aranceles",
     "sub": "Walmart consolidado: margen bruto, %",
     "tipo": "line",
     "unidad": "%",
     "dec": 1,
     "trimestres": [
      "2T25",
      "3T25",
      "4T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "WMT": [
       24.5,
       24.2,
       24.0,
       24.3,
       25.4
      ]
     },
     "fuente": "presentación financiera de Walmart del 2T FY27. El 2T26 incluye ~$2,9B de devoluciones de aranceles contabilizadas como menor coste de ventas."
    }
   ],
   "temas": [
    {
     "titulo": "Más visitas y cestas más cortas: la gasolina cambia la forma de comprar",
     "parrafos": [
      "El patrón es común a los tres formatos: las visitas crecen y el gasto por visita se contiene. En Dollar General el ticket sube por precio medio, con menos artículos por transacción; en Sam's Club el ticket cae con el tráfico al alza, y en Walmart U.S. se frena mientras las transacciones aguantan.",
      "La explicación que dan las compañías es la gasolina. Con el galón por encima de 4 $, el cliente de Dollar General reduce desplazamientos y compra más cerca de casa, más a menudo y menos cada vez. Walmart sitúa en junio el momento en que los *trade-offs* se hicieron más visibles. Es **consistente con un consumidor que no deja de comprar, pero administra cada viaje**, lo que favorece a los formatos de proximidad y de precio bajo."
     ],
     "evidencias": [
      {
       "e": "WMT",
       "t": "Sam's: tráfico +7,0% y ticket −2,5%, con un comparable sin combustible del +4,4%; la entrega rápida crece un 48% en EE.UU."
      },
      {
       "e": "COST",
       "t": "Tráfico mundial +3,2%, +3,6% y +2,5% (jun–ago); ticket sin gasolina ni FX del +3,7% al +2,8%."
      },
      {
       "e": "DG",
       "t": "El delivery aporta ~40 pb al comparable, con ~80% de incrementalidad y un ticket mayor que el de tienda."
      }
     ]
    },
    {
     "titulo": "El trade-down sube por la escala de renta",
     "parrafos": [
      "Walmart atribuye sus ganancias de cuota, en todas las categorías y tramos de renta, sobre todo a los hogares de renta alta, y reconoce que parte se explica por un surtido de marcas más elevadas. Dollar General describe una entrada de clientes de renta media y alta, sobre todo de más de 100.000 $, que dura casi un año y ya es diaria; compran también no consumibles y productos de 1 $.",
      "La lectura prudente es que la búsqueda de precio ya no es exclusiva del cliente de renta baja. El cliente principal de Dollar General sigue *financially constrained*, pero la base de clientes del canal value se ensancha hacia arriba. Costco no publica datos por renta, aunque la solidez de Non-Foods (joyería, hogar) **no muestra señales de trade-down dentro de su base de socios**."
     ],
     "evidencias": [
      {
       "e": "WMT",
       "t": "Ganancias de cuota frente a supermercados convencionales, droguerías y formatos dólar; Walmart+ firma el mejor primer semestre de su historia."
      },
      {
       "e": "DG",
       "t": "Cuota ganada en dólares y unidades en consumibles y no consumibles, con aceleración en el trimestre."
      },
      {
       "e": "COST",
       "t": "Non-Foods crece a un dígito medio-alto en junio y medio en julio y agosto; joyería y home furnishings, entre los mejores los tres meses."
      }
     ]
    },
    {
     "titulo": "Aranceles devueltos: margen puntual convertido en inversión en precio",
     "parrafos": [
      "Las devoluciones de aranceles IEEPA son la partida no recurrente del trimestre. Walmart las contabiliza como menor coste de ventas y **no las ajusta** en su beneficio operativo; Dollar General las cuantifica netas de la reinversión (~66 pb de margen operativo).",
      "Ambos las devuelven al cliente. Walmart eleva los rollbacks de ~7.200 a más de 11.000 (lo normal son ~5.000) y su inflación like-for-like de general merchandise baja unos 270 pb frente al 1T. Dollar General financia promociones de Memorial Day y 4 de julio, precios diarios más bajos y marketing. El resultado apunta a **un segundo semestre de precios más bajos y márgenes sin ese apoyo**: la guía de Walmart para el 3T es de +2–4% en beneficio operativo."
     ],
     "evidencias": [
      {
       "e": "WMT",
       "t": "Sin aranceles, el beneficio operativo crece en la parte alta del rango guiado del 7–10%; menos de un tercio de lo que vende en EE.UU. es importado."
      },
      {
       "e": "DG",
       "t": "Margen bruto sin aranceles del 31,79% (calculado), ~46 pb más que un año antes, gracias a shrink, mermas y distribución."
      },
      {
       "e": "COST",
       "t": "Sus calls mensuales no mencionan aranceles ni inflación de alimentos; la única inflación citada es la de la gasolina."
      }
     ]
    },
    {
     "titulo": "El discrecional se enfría en Walmart y aguanta en el formato dólar",
     "parrafos": [
      "El general merchandise de Walmart U.S. crece a un dígito bajo en comparables y sus ventas suben un 0,9% (calculado), frente al 4,3% de grocery (calculado). La dirección lo vincula al fin del impulso de los reembolsos fiscales del 1T y a la gasolina; julio fue mejor mes. Health & Wellness cae por el MFP (~−900 pb en la categoría).",
      "En Dollar General los no consumibles crecen un 4,5% (sexto trimestre por encima de los consumibles), con temporada +7,4% en ventas y liderazgo de juguetes y licencias. El mix apenas cambia (consumibles 82,05% frente a 82,22%). La divergencia sugiere que el discrecional de **bajo importe resiste mejor que el de mayor ticket**, aunque ambos datos son compatibles con un gasto cauto."
     ],
     "evidencias": [
      {
       "e": "WMT",
       "t": "En general merchandise tiran juguetes y moda; el marketplace crece más de un 40% en hardlines y hogar."
      },
      {
       "e": "DG",
       "t": "Value Valley (1 $) crece más de un 16% en comparables, con más de 600 artículos rotativos."
      },
      {
       "e": "COST",
       "t": "Foods & Sundries se modera a un dígito bajo en agosto; frescos, estables a un dígito medio."
      }
     ]
    }
   ],
   "citas": [
    {
     "texto": "June was a little more obvious as we look at the quarter in terms of customers making trade-offs.",
     "quien": "Rainey, CFO",
     "contexto": "Walmart, call del 2T FY27"
    },
    {
     "texto": "She comes more often but she buys less on each trip",
     "quien": "Todd Vasos, CEO",
     "contexto": "Dollar General, call del 2T 2026"
    }
   ],
   "pulso": {
    "etiqueta": "Después del trimestre · conferencias de Goldman Sachs (15-sep) y Piper Sandler (16-sep)",
    "titulo": "Septiembre: más inversión en precio y un consumidor que Dollar General ve presionado en todas las rentas",
    "parrafos": [
     "En la conferencia de Goldman Sachs, Walmart describe un consumidor *resiliente* pero muy selectivo y espera ganar cuota y unidades en todos los tramos de renta en el segundo semestre. Mantiene 11.200 rollbacks, no repercute el encarecimiento del transporte y su inflación baja del ~1,4% del primer semestre a menos del 1% en el 3T.",
     "Dollar General es más sombrío: la presión alcanza todos los niveles de renta, y la renta media y media-alta *is acting more like a lower-income shopper*. Su cliente principal compra cuatro, cinco o seis veces al mes en vez de dos, y la dirección no ve nada que apunte a una mejora antes de final de año salvo que baje la gasolina; el empleo sigue siendo el soporte."
    ],
    "bullets": [
     {
      "e": "WMT",
      "t": "Sexto trimestre de e-commerce rentable; el retail media tiene márgenes de ~70%. El MFP seguirá restando en 2027 (15 fármacos más)."
     },
     {
      "e": "WMT",
      "t": "Piper Sandler: el marketplace, sobre todo general merchandise, crece más de un 50% y muestra *high penetration of higher-income households*."
     },
     {
      "e": "DG",
      "t": "Diferencial de precios del 2–4% frente a los grandes generalistas; subir precios es *the very last thing*. Relevo del CEO en enero de 2027 (JJ Fleeman)."
     }
    ]
   },
   "macroIntro": "El canal value describe un consumidor que **sigue comprando y visitando más, pero gasta menos por visita**, con la gasolina como principal presión y una búsqueda de precio que se extiende hacia rentas medias y altas.",
   "macro": [
    {
     "tema": "Consumo",
     "texto": "Tráfico positivo en los tres; el ticket se modera y el discrecional de mayor importe se frena en Walmart.",
     "vs": "Frente al 1T: el volumen de visitas se mantiene; el gasto por visita y el general merchandise pierden el apoyo de los reembolsos fiscales."
    },
    {
     "tema": "Renta de los hogares",
     "texto": "El cliente de renta baja sigue empleado, pero la inflación y la gasolina absorben sus subidas de ingresos. Los hogares de más de 100.000 $ acuden al canal value de forma habitual.",
     "vs": "Frente al 1T: la bifurcación por renta persiste y la presión parece subir por la escala de ingresos."
    },
    {
     "tema": "Energía y gasolina",
     "texto": "Gasolina por encima de 4 $ por galón; el precio medio de venta de Costco sube un 22–26% interanual y aporta ~2,5–2,9 pp a sus ventas.",
     "vs": "Frente al 1T: pasa de ser un coste de margen a condicionar también la frecuencia y el tamaño de la compra."
    },
    {
     "tema": "Precios, inflación y aranceles",
     "texto": "Walmart cifra la inflación like-for-like de EE.UU. en +1,4% y reinvierte en precio las devoluciones de aranceles IEEPA; Dollar General describe una inflación *stubborn* para su cliente y un entorno promocional similar al del 1T.",
     "vs": "Frente al 1T: las devoluciones arancelarias abren margen para bajar precios; más presión deflacionaria en el canal en el 2S."
    },
    {
     "tema": "Empleo y salarios",
     "texto": "Menor rotación de plantilla en ambos; en Walmart eleva el coste de la sanidad de grupo, aunque gana apalancamiento en salarios por productividad.",
     "vs": "Frente al 1T: un mercado laboral de retail menos tenso, sin presión salarial destacada."
    }
   ],
   "vigilar": [
    "Si el tráfico se mantiene positivo con la gasolina por encima de 4 $ o empieza a ceder también el número de visitas.",
    "General merchandise de Walmart en la segunda mitad y en la vuelta al colegio: ¿rebote o debilidad persistente del discrecional?",
    "Efecto de la reinversión de las devoluciones de aranceles en precios, unidades y márgenes del 3T.",
    "Retención de los clientes de renta media y alta en Dollar General y Walmart, y si la presión se extiende a esas rentas.",
    "Costco: margen, membresía y renovación en su 4T fiscal (24-sep) y comparables de septiembre sin el efecto de Labor Day.",
    "Costes de combustible y transporte frente a la expansión de margen bruta prevista por Dollar General para el 2S.",
    "Arrastre del MFP en farmacia y ampliación a más fármacos en 2027."
   ],
   "proximo": "Próximos datos: Costco publica su 4T fiscal (may–ago) el 24-sep-2026, que por la regla de asignación entrará en el informe del 3T; Walmart y Dollar General publicarán su trimestre fiscal ago–oct previsiblemente entre noviembre y diciembre.",
   "cobertura": [
    {
     "empresa": "Walmart",
     "fiscal": "2T FY27",
     "meses": "may–jul 2026",
     "publicado": "20-ago-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/104169/000010416926000145/earningsreleasefy27q2.htm"
      },
      {
       "t": "Presentación",
       "url": "https://www.sec.gov/Archives/edgar/data/104169/000010416926000145/earningspresentationfy27.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/104169/000010416926000154/wmt-20260731.htm"
      },
      {
       "t": "Call 20-ago y conferencias 15 y 16-sep"
      }
     ]
    },
    {
     "empresa": "Costco",
     "fiscal": "Ventas mensuales (4T FY26 sin publicar)",
     "meses": "jun–ago 2026 (1-jun a 30-ago)",
     "publicado": "8-jul, 5-ago y 2-sep-2026",
     "docs": [
      {
       "t": "Calls de ventas de junio, julio y agosto"
      },
      {
       "t": "4T FY26: resultados el 24-sep-2026"
      }
     ]
    },
    {
     "empresa": "Dollar General",
     "fiscal": "2T FY26",
     "meses": "may–jul 2026",
     "publicado": "27-ago-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/29534/000110465926101918/tm2623914d1_ex99.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/29534/000110465926101932/dg-20260731x10q.htm"
      },
      {
       "t": "Call 27-ago y conferencia 15-sep"
      }
     ]
    }
   ],
   "metodo": "Trimestre natural: cada compañía entra con el trimestre fiscal que comparte más días con el natural. Walmart (2T FY27) y Dollar General (2T FY26) cubren may–jul 2026 y se asignan al 2T. **Costco no tiene trimestre fiscal en el 2T**: su 3T fiscal (hasta el 10-may) se incluyó en el 1T y su 4T fiscal (16 semanas, may–ago) se publica el 24-sep; en su lugar se usan sus ventas mensuales de junio, julio y agosto (13 semanas), sin cuenta de resultados, y solo junio pertenece al trimestre natural. El informe anterior se tituló «Q2 2026», pero cubría feb–abr (Walmart 1T FY27, Costco 3T FY26, Dollar General 1T FY26): por la regla de periodos es el 1T natural y aquí se trata como «1T 2026». Lo marcado «(calculado)» es cálculo propio. Las conferencias de septiembre se refieren al trimestre en curso y se presentan por separado.",
   "glosario": [
    {
     "t": "Comparables (comps)",
     "d": "Ventas de tiendas abiertas al menos un año; miden el crecimiento orgánico sin aperturas."
    },
    {
     "t": "Tráfico / ticket",
     "d": "Número de transacciones y gasto medio por transacción; separan visitas de tamaño de cesta."
    },
    {
     "t": "Trade-down / trade-in",
     "d": "Migración de consumidores hacia formatos o marcas más baratos; en el canal, entrada de rentas más altas."
    },
    {
     "t": "Rollback",
     "d": "Rebaja de precio temporal de Walmart sobre un artículo concreto."
    },
    {
     "t": "Shrink",
     "d": "Pérdida de inventario por robo, daños o errores; su reducción mejora el margen bruto."
    },
    {
     "t": "MFP (maximum fair price)",
     "d": "Precio máximo negociado para ciertos fármacos en EE.UU.; reduce las ventas de farmacia."
    },
    {
     "t": "Devoluciones IEEPA",
     "d": "Reembolso de aranceles cobrados bajo la ley IEEPA; beneficio no recurrente en el coste de ventas."
    }
   ]
  }
 ],
 "semis": [
  {
   "sector": "semis",
   "trimestre": "2026-2T",
   "sectorNombre": "Semiconductores",
   "label": "2T 2026",
   "labelAnterior": "1T 2026",
   "meses": "abr–jun 2026",
   "publicado": "18-sep-2026",
   "empresas": [
    {
     "id": "NVDA",
     "nombre": "NVIDIA"
    },
    {
     "id": "TXN",
     "nombre": "Texas Instruments"
    },
    {
     "id": "TSM",
     "nombre": "TSMC"
    }
   ],
   "titulo": "La IA acelera y el límite pasa a ser la oferta; la industria y el automóvil se suman al ciclo mientras la memoria encarece los componentes y frena al consumo",
   "tarjeta": "La IA acelera y choca con la oferta; industria y auto se suman al ciclo y la memoria frena al consumo",
   "drivers": "demanda de IA y centros de datos · ciclo industrial y auto · electrónica de consumo · margen bruto y precios · inventarios y plazos · capex y capacidad · China",
   "pregunta": {
    "q": "¿Sigue siendo la IA la única palanca del ciclo o la recuperación se amplía?",
    "a": "Se amplía, pero no a todo. La IA acelera (Data Center de NVIDIA +117%; HPC, 66% de los ingresos de TSMC) y Texas Instruments añade una recuperación amplia en industrial (~+30%) y automoción. La amplitud se detiene en el consumo: smartphone −4% intertrimestral en TSMC y electrónica personal plana en TI, por el encarecimiento de memoria y componentes."
   },
   "takeaways": [
    {
     "lead": "La IA acelera en lugar de estabilizarse.",
     "texto": "NVIDIA ingresa $96,2B (+106% interanual) con Data Center en $89,0B (+117%), cuarto trimestre consecutivo de aceleración. En TSMC, HPC sube un 20% intertrimestral hasta el 66% de los ingresos y la compañía eleva su previsión de crecimiento de 2026 a *algo más del 40%* en dólares."
    },
    {
     "lead": "La restricción ya no es la demanda, sino la oferta.",
     "texto": "NVIDIA da por primera vez una guía a un año vista, ~+70% en FY28, explícitamente limitada por el suministro. TSMC califica de *muy grande* la brecha entre demanda y oferta en N3 e inferiores y admite que el empaquetado avanzado ya limita el crecimiento de sus clientes."
    },
    {
     "lead": "La recuperación se extiende a la industria y el automóvil.",
     "texto": "Texas Instruments crece un 23% interanual y un 13% intertrimestral, por encima de su rango de guía: industrial ~+30%, automoción en la franja media de dos dígitos y centros de datos ×2. Los días de inventario bajan a 196, los plazos se alargan y los precios, planos en el semestre, empiezan a subir."
    },
    {
     "lead": "La memoria es la otra cara del ciclo: margen y consumo.",
     "texto": "NVIDIA rebaja su margen bruto del 75,0% a una guía del 74% en el 3T y un suelo del 71–72% en el 4T por el coste de la memoria; sus compromisos de suministro pasan de $119B a $279B. TSMC, TI y NVIDIA coinciden en que el encarecimiento de componentes presiona smartphone, electrónica personal y PC."
    },
    {
     "lead": "Capex récord y balance al servicio de la demanda.",
     "texto": "TSMC sube su capex de 2026 a $60–64B (enero: $52–56B) y añade $100B de inversión en Arizona. NVIDIA invierte casi $50B en laboratorios de IA, asume garantías por $108,5B y alarga su DSO de 45 a 60 días: una parte creciente de la demanda descansa en su propio balance."
    }
   ],
   "cambios": [
    {
     "kpi": "Demanda de IA",
     "dir": "Acelera",
     "texto": "Los ingresos de NVIDIA pasan de +85% interanual en el 1T (informe anterior) a +106%; Data Center crece un 18% intertrimestral hasta $89,0B."
    },
    {
     "kpi": "Concentración en HPC",
     "dir": "Aumenta",
     "texto": "HPC pasa del 61% al 66% de los ingresos de TSMC y smartphone, del 26% al 22% (1T según el informe anterior). Los nodos de 7 nm e inferiores suben del 74% al 77% de los ingresos de oblea."
    },
    {
     "kpi": "Ciclo industrial y auto",
     "dir": "Se amplía",
     "texto": "TI mantiene industrial en ~+30% interanual y la automoción pasa de un dígito medio en el 1T a la franja media de dos dígitos. Los ingresos crecen un 23% (19% en el 1T)."
    },
    {
     "kpi": "Margen bruto",
     "dir": "Máximos con guía a la baja",
     "texto": "TSMC sube al 67,7% (+150 pb) y TI al 61,4% (+340 pb). TSMC guía 65–67% por la dilución de N2 (3–4 pp) y NVIDIA baja al 74% en el 3T y al 71–72% en el 4T por la memoria; solo TI espera algo más de margen en el 3T."
    },
    {
     "kpi": "Capex y compromisos",
     "dir": "Se eleva",
     "texto": "TSMC pasa de «hacia el extremo alto de $52–56B» a $60–64B. Los compromisos de suministro de NVIDIA suben de $119B a $279B (el informe del 1T citaba $145B con otra definición, que incluía prepagos)."
    },
    {
     "kpi": "Inventarios",
     "dir": "Divergen",
     "texto": "TI reduce sus días de 209 a 196 porque sirve la demanda desde stock; TSMC los sube de 80 (calc.) a 87 por la rampa de N2; NVIDIA eleva su inventario de $25,8B a $31,6B para lanzar Vera Rubin."
    },
    {
     "kpi": "Consumo electrónico",
     "dir": "Se debilita",
     "texto": "Nuevo foco de presión: smartphone −4% intertrimestral en TSMC, electrónica personal plana en TI y PC de consumo más lento en NVIDIA, los tres ligados al precio de la memoria y los componentes."
    }
   ],
   "seguimiento": [
    {
     "kpi": "Demanda de Blackwell y Vera Rubin",
     "dir": "Se sostiene",
     "texto": "Blackwell sigue siendo la gran mayoría del mix; los envíos de producción de Vera Rubin empezaron en agosto y NVIDIA espera que aporte ≈20% de los ingresos de Data Center en el 3T."
    },
    {
     "kpi": "IA agéntica como driver de cómputo",
     "dir": "Se confirma",
     "texto": "Huang afirma que la mayoría de la IA ya es agéntica, con 15–100 veces más cómputo por agente que por humano; TSMC ve que los agentes devuelven protagonismo a la CPU."
    },
    {
     "kpi": "Capacidad de TSMC en 3 nm, 2 nm y empaquetado",
     "dir": "Sigue tensa",
     "texto": "N2 aporta ya el 3% de los ingresos de oblea y hay tres nuevas fábricas de N3; aun así, el empaquetado avanzado limita el crecimiento de los clientes."
    },
    {
     "kpi": "Recuperación industrial de TI",
     "dir": "Se consolida",
     "texto": "Industrial crece ~30% interanual y ~10% intertrimestral en todos los sectores y regiones; TI sitúa el mercado aún 5–6 puntos por debajo del pico de 2022 y dice que los clientes no están acumulando inventario."
    },
    {
     "kpi": "Inventarios y plazos en analógico",
     "dir": "Se tensan",
     "texto": "Días de inventario de 209 a 196, cargas de fábrica al alza y plazos por debajo de 13 semanas que suben un par de semanas; los precios, planos en el 1S, empiezan a subir."
    },
    {
     "kpi": "Restricciones de exportación a China",
     "dir": "Sin cambios de fondo",
     "texto": "Los envíos de H200 son menos del 1% de Data Center, NVIDIA sigue excluyendo China de su guía y soporta un arancel del 25% que no repercute. TSMC no menciona el tema en su call."
    },
    {
     "kpi": "Capex de fundición y tensión hasta 2027",
     "dir": "Se intensifica",
     "texto": "TSMC eleva el capex de 2026 y prevé un capex a tres años *aún más significativamente* superior; NVIDIA prevé restricción de oferta al menos hasta el final de FY28."
    },
    {
     "kpi": "Leading-edge frente a nodos maduros",
     "dir": "Lectura matizada",
     "texto": "En TSMC los nodos maduros solo escasean en lo ligado a la IA (gestión de energía y sensores); el resto de commodity va flojo. La recuperación amplia que anticipábamos en el 1T se ve en TI (industrial y auto), no en la capacidad madura de TSMC."
    }
   ],
   "scorecard": [
    {
     "titulo": "Resultados",
     "filas": [
      {
       "kpi": "Ingresos",
       "nota": "variación interanual",
       "v": {
        "NVDA": {
         "v": "$96,2B · +106%",
         "c": "+18% intertrimestral; periodo may–jul"
        },
        "TXN": {
         "v": "5.463 M$ · +23%",
         "c": "+13% intertrimestral; por encima del rango de guía"
        },
        "TSM": {
         "v": "$40,2B",
         "c": "Parte alta de la guía; variación no publicada en el call"
        }
       }
      },
      {
       "kpi": "Margen bruto",
       "v": {
        "NVDA": {
         "v": "75,0%",
         "c": "1T: 74,9% · 2T25: 72,4%"
        },
        "TXN": {
         "v": "61,4%",
         "c": "+340 pb intertrimestral; 2T25: 57,9%"
        },
        "TSM": {
         "v": "67,7%",
         "c": "+150 pb intertrimestral; algo por encima de la guía"
        }
       }
      },
      {
       "kpi": "Margen operativo",
       "v": {
        "NVDA": {
         "v": "66,2%",
         "c": "1T: 65,6% (calc.) · 2T25: 60,8%"
        },
        "TXN": {
         "v": "42,3%",
         "c": "1T: 37,5% (calc.) · 2T25: 35,1%"
        },
        "TSM": {
         "v": "N/D",
         "c": "No figura en el call; guía 3T: 56–58%"
        }
       }
      },
      {
       "kpi": "BPA",
       "nota": "variación interanual",
       "v": {
        "NVDA": {
         "v": "$2,22 non-GAAP · +120%",
         "c": "GAAP $2,46, con 7.771 M$ de ganancias en participadas"
        },
        "TXN": {
         "v": "$2,14 · +52%",
         "c": "Incluye 5 céntimos de beneficio fiscal discreto"
        },
        "TSM": {
         "v": "N/D",
         "c": "No figura en el transcript"
        }
       }
      },
      {
       "kpi": "Flujo de caja libre",
       "v": {
        "NVDA": {
         "v": "$21,3B",
         "c": "1T: $48,6B · 2T25: $13,5B"
        },
        "TXN": {
         "v": "2.738 M$",
         "c": "12 meses: 6.534 M$, 33,6% de ingresos"
        },
        "TSM": {
         "v": "~TWD 287.000 M (calc.)",
         "c": "Flujo operativo ~TWD 783.000 M menos capex"
        }
       }
      }
     ]
    },
    {
     "titulo": "Indicadores sectoriales",
     "filas": [
      {
       "kpi": "IA y centros de datos",
       "v": {
        "NVDA": {
         "v": "Data Center $89,0B · +117%",
         "c": "92,5% de los ingresos (calc.)"
        },
        "TXN": {
         "v": "Data center ×2",
         "c": "Interanual; ~+20% intertrimestral (call)"
        },
        "TSM": {
         "v": "HPC 66% · +20%",
         "c": "Intertrimestral; 1T: 61% (informe anterior)"
        }
       }
      },
      {
       "kpi": "Industrial y automoción",
       "v": {
        "NVDA": {
         "v": "Auto on-prem $8B",
         "c": "Últimos 12 meses (call)"
        },
        "TXN": {
         "v": "Industrial ~+30% · auto mid-teens",
         "c": "Interanual; auto acelera con China"
        },
        "TSM": {
         "v": "Automoción 4% · +15%",
         "c": "Intertrimestral; IoT 5%, +4%"
        }
       }
      },
      {
       "kpi": "Consumo",
       "nota": "PC, smartphone, electrónica personal",
       "v": {
        "NVDA": {
         "v": "Edge $7,2B · +27%",
         "c": "PC de consumo lastrado por memoria"
        },
        "TXN": {
         "v": "Electrónica personal plana",
         "c": "Interanual; clientes con escasez de componentes"
        },
        "TSM": {
         "v": "Smartphone 22% · −4%",
         "c": "Intertrimestral; 1T: 26% (informe anterior)"
        }
       }
      },
      {
       "kpi": "Mix de producto y nodos",
       "v": {
        "NVDA": {
         "v": "Vera Rubin ≈20% de DC",
         "c": "Previsto en el 3T; envíos desde agosto"
        },
        "TXN": {
         "v": "Analógico 4.365 M$ · +26%",
         "c": "Procesado embebido 788 M$ · +16%"
        },
        "TSM": {
         "v": "Avanzados 77% de oblea",
         "c": "N3 30% · N5 33% · N7 11% · N2 3%"
        }
       }
      },
      {
       "kpi": "Guía del 3T",
       "v": {
        "NVDA": {
         "v": "$108,0B ±2%",
         "c": "Margen bruto 74,0% ±50 pb; sin China"
        },
        "TXN": {
         "v": "5.650–6.150 M$",
         "c": "BPA $2,23–2,57; *above seasonal*"
        },
        "TSM": {
         "v": "$44,6–45,8B",
         "c": "+12% intertrimestral y +37% interanual; margen 65–67%"
        }
       }
      },
      {
       "kpi": "Inventarios",
       "v": {
        "NVDA": {
         "v": "$31,6B",
         "c": "1T: $25,8B; preparación de Vera Rubin"
        },
        "TXN": {
         "v": "196 días · 4.605 M$",
         "c": "1T: 209 días; cierre 2025: 222"
        },
        "TSM": {
         "v": "87 días",
         "c": "+7 días por la rampa de N2"
        }
       }
      },
      {
       "kpi": "Capex",
       "v": {
        "NVDA": {
         "v": "2.677 M$",
         "c": "Compromisos de suministro $279B (1T: $119B)"
        },
        "TXN": {
         "v": "514 M$",
         "c": "Guía 2026: 2.000–3.000 M$; CHIPS Act 549 M$"
        },
        "TSM": {
         "v": "$15,7B",
         "c": "Guía 2026: $60–64B (enero: $52–56B)"
        }
       }
      },
      {
       "kpi": "Precios y plazos",
       "v": {
        "NVDA": {
         "v": "Subidas ejecutadas",
         "c": "Efectivas en el 1T FY28"
        },
        "TXN": {
         "v": "Subidas en marcha",
         "c": "Planos en el 1S; plazos <13 semanas, al alza"
        },
        "TSM": {
         "v": "Sin cifra",
         "c": "Busca margen para financiar la expansión"
        }
       }
      },
      {
       "kpi": "China",
       "v": {
        "NVDA": {
         "v": "H200 <1% de Data Center",
         "c": "Fuera de la guía; arancel del 25%"
        },
        "TXN": {
         "v": "22% de los ingresos",
         "c": "+24% interanual (calc.); lidera en auto"
        },
        "TSM": {
         "v": "N/D",
         "c": "No se menciona en el call"
        }
       }
      }
     ]
    }
   ],
   "scorecardNota": "B = miles de millones; M = millones. NVIDIA: 2T fiscal FY27 (may–jul 2026); su non-GAAP ya no excluye la remuneración en acciones y Data Center se divide en Hyperscale y ACIE (histórico reexpresado). TI: 1T26 calculado como semestre menos 2T; mercados finales solo en términos aproximados. TSMC: solo transcript del call, sin variaciones interanuales, beneficio ni margen operativo del trimestre. Los niveles de margen no son comparables entre modelos de negocio.",
   "companias": [
    {
     "e": "NVDA",
     "nombre": "NVIDIA",
     "titular": "Crecimiento acelerado, margen a la baja y más balance en juego",
     "texto": "Ingresos de $96,2B (+106%) y guía de $108,0B para el 3T sin China. Novedades: guía de ~+70% en FY28 limitada por oferta y suelo de margen bruto del 71–72% por la memoria. El beneficio GAAP incluye 7.771 M$ de ganancias en participadas."
    },
    {
     "e": "TXN",
     "nombre": "Texas Instruments",
     "titular": "El ciclo analógico se amplía y los precios dejan de caer",
     "texto": "Ingresos +23% por encima de la guía, margen bruto del 61,4% y guía del 3T por encima de la estacionalidad. Crecen todos los mercados salvo electrónica personal. El BPA incluye 5 céntimos de beneficio fiscal discreto; el flujo libre se apoya en 549 M$ de cobros de la CHIPS Act."
    },
    {
     "e": "TSM",
     "nombre": "TSMC",
     "titular": "Más capex para una demanda que supera la capacidad",
     "texto": "Ingresos de $40,2B en la parte alta de la guía y margen bruto del 67,7%. Eleva el crecimiento de 2026 a algo más del 40% y el capex a $60–64B. Anticipa 3–4 pp de dilución de margen por N2 en el 2S y una prudencia mayor con el consumo."
    }
   ],
   "exhibits": [
    {
     "titulo": "Fuera de los hyperscalers, la demanda de NVIDIA crece aún más deprisa",
     "sub": "NVIDIA: ingresos por plataforma, variación interanual en el 2T FY27, %",
     "tipo": "bar",
     "unidad": "%",
     "dec": 0,
     "cero": true,
     "trimestres": [
      "Hyperscale",
      "ACIE",
      "Edge Computing"
     ],
     "series": {
      "NVDA": [
       102,
       138,
       27
      ]
     },
     "fuente": "comentario del CFO de NVIDIA (histórico reexpresado). ACIE: AI Clouds, Industrial & Enterprise."
    },
    {
     "titulo": "El margen bruto marca máximos en el 2T, pero las guías apuntan a la baja",
     "sub": "Margen bruto, %",
     "tipo": "bar",
     "unidad": "%",
     "dec": 1,
     "trimestres": [
      "1T26",
      "2T26",
      "3T26 (guía)"
     ],
     "series": {
      "NVDA": [
       74.9,
       75.0,
       74.0
      ],
      "TXN": [
       58.0,
       61.4,
       null
      ],
      "TSM": [
       66.2,
       67.7,
       66.0
      ]
     },
     "fuente": "notas de resultados, 10-Q y calls. NVIDIA: 1T y 2T fiscales FY27, GAAP. TI y TSMC: 1T26 calculado. 3T26: punto medio de la guía; TI no da guía de margen."
    },
    {
     "titulo": "En TSMC crecen la IA y el automóvil; el smartphone retrocede",
     "sub": "TSMC: ingresos por plataforma, variación intertrimestral en el 2T26, %",
     "tipo": "bar",
     "unidad": "%",
     "dec": 0,
     "cero": true,
     "trimestres": [
      "HPC",
      "Automoción",
      "DCE",
      "IoT",
      "Smartphone"
     ],
     "series": {
      "TSM": [
       20,
       15,
       5,
       4,
       -4
      ]
     },
     "fuente": "call de resultados de TSMC del 16-jul-2026. Peso sobre ingresos: HPC 66%, smartphone 22%, IoT 5%, automoción 4%, DCE 1%."
    },
    {
     "titulo": "TI sirve la demanda desde stock; TSMC acumula producto en curso por N2",
     "sub": "Días de inventario",
     "tipo": "bar",
     "unidad": "",
     "dec": 0,
     "cero": true,
     "trimestres": [
      "4T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "TXN": [
       222,
       209,
       196
      ],
      "TSM": [
       null,
       80,
       87
      ]
     },
     "fuente": "10-Q y call de TI; call de TSMC. 1T26 de TSMC calculado a partir de la variación publicada; sin dato del 4T25 en los documentos. Series de cinco trimestres no disponibles."
    }
   ],
   "temas": [
    {
     "titulo": "La IA acelera y el cuello de botella pasa de la demanda a la oferta",
     "parrafos": [
      "Los datos no muestran desaceleración en la inversión en IA. Data Center de NVIDIA crece un 117% interanual y un 18% intertrimestral, y HPC sube un 20% intertrimestral en TSMC hasta dos tercios de sus ingresos. Las guías del 3T mantienen el ritmo: $108,0B en NVIDIA (≈+12% intertrimestral, calc.) y +12% en TSMC.",
      "Lo nuevo es el lenguaje. NVIDIA da una guía de ~+70% para FY28 calificada de *supply-constrained* y afirma que toda su cadena está tensionada; TSMC habla de una brecha *muy grande* en N3 e inferiores y de un empaquetado avanzado que ya frena a sus clientes. Esto **sugiere que el ritmo del ciclo lo marcará la capacidad** (obleas punteras, empaquetado, memoria, energía) más que los pedidos."
     ],
     "evidencias": [
      {
       "e": "NVDA",
       "t": "ACIE +25% intertrimestral frente al 13% de Hyperscale; sovereign AI +35%. ACIE sería aproximadamente la mitad de Data Center."
      },
      {
       "e": "TSM",
       "t": "Wei espera una demanda muy fuerte probablemente hasta 2029 o 2030, sin descartar baches; la familia N2 aporta ya el 3% de los ingresos de oblea."
      },
      {
       "e": "TXN",
       "t": "Data center duplica sus ventas; la transición a arquitecturas de 800 V amplía el mercado de Analógico y Procesado embebido."
      }
     ]
    },
    {
     "titulo": "Fuera de la IA, el ciclo se amplía a la industria y el automóvil, no al consumo",
     "parrafos": [
      "Texas Instruments es la mejor lectura del ciclo amplio. Industrial crece ~30% interanual en todos los sectores y regiones y la automoción acelera durante el trimestre, con China, eléctricos e híbridos como motor. La guía del 3T (5.650–6.150 M$) supera la estacionalidad y, según la compañía, se explica casi por completo por volumen, no por precio.",
      "Hay dos matices. Parte de la señal podría ser reposición: TI describe inventarios de automoción *muy bajos* en sus clientes, aunque afirma que en industrial los clientes aún no acumulan inventario. Y la amplitud no llega a los nodos maduros de TSMC, donde solo escasean los chips de gestión de energía y sensores ligados a la IA; el resto de segmentos commodity sigue flojo."
     ],
     "evidencias": [
      {
       "e": "TXN",
       "t": "Días de inventario de 209 a 196, cargas de fábrica al alza y plazos que suben un par de semanas; precios planos en el 1S y primeras subidas, sobre todo en Analógico."
      },
      {
       "e": "TSM",
       "t": "Automoción +15% intertrimestral, pero con un peso del 4%; IoT +4%."
      },
      {
       "e": "NVDA",
       "t": "Enterprise on-prem: $8B en automoción en los últimos 12 meses y $7B combinados en servicios financieros, manufactura y sanidad."
      }
     ]
    },
    {
     "titulo": "La memoria traslada el coste de la IA al resto de la cadena",
     "parrafos": [
      "El encarecimiento de la memoria es el principal cambio negativo del trimestre. NVIDIA describe condiciones de precio *extremas*, rebaja su margen bruto al 74% en el 3T y a un suelo del 71–72% en el 4T, y eleva sus compromisos de suministro de $119B a $279B, sobre todo en memoria. Espera recuperar margen (72–73% en FY28) con subidas de precio ya ejecutadas.",
      "El coste se desplaza aguas abajo. TSMC ve presionados los segmentos de consumo y sensibles al precio por la subida de los componentes, NVIDIA cita PC de consumo más lento por la memoria y TI, clientes de electrónica personal limitados por escasez. Es **consistente con una IA que absorbe capacidad y encarece el resto de la electrónica**."
     ],
     "evidencias": [
      {
       "e": "NVDA",
       "t": "Materias primas en inventario de 11.341 M$ frente a 3.807 M$ en enero."
      },
      {
       "e": "TSM",
       "t": "Smartphone −4% intertrimestral; Wei compara el ~86% de margen bruto de la memoria con el ~68% con el que se conformaría TSMC."
      },
      {
       "e": "TXN",
       "t": "Electrónica personal plana interanual; en el 3T espera crecimiento intertrimestral inferior al habitual."
      }
     ]
    },
    {
     "titulo": "Capex récord y balance: quién financia el ciclo",
     "parrafos": [
      "TSMC vuelve a elevar su capex de 2026, a $60–64B, anticipa un capex a tres años aún más alto y suma $100B en Arizona (total de $265B); admite que parte del aumento responde a equipos más caros. TI invierte menos (514 M$) tras su ciclo de 300 mm y dice tener salas limpias para tres años.",
      "NVIDIA sigue otro camino: usa su balance para sostener a sus clientes. Invierte casi $50B en laboratorios de IA, asume garantías por $108,5B (sobre todo un centro alquilado a OpenAI), amplía plazos de cobro y emite $25B en bonos; TSMC, en cambio, dice no financiar a los clientes de sus clientes. La concentración (un cliente directo, 16% de los ingresos) y la solvencia del ecosistema **pasan a ser un riesgo a seguir**."
     ],
     "evidencias": [
      {
       "e": "NVDA",
       "t": "DSO de 45 a 60 días; MoUs con gestoras para movilizar más de $500B de capital de terceros. Kress rechaza la crítica de financiación circular."
      },
      {
       "e": "TSM",
       "t": "Capex: 70–80% procesos avanzados y 10–20% empaquetado, test y máscaras; no prevé cuellos de botella en equipos."
      },
      {
       "e": "TXN",
       "t": "Capex 2026 de 2.000–3.000 M$, *si acaso* hacia la parte alta; ha recibido 630 M$ de hasta 1.600 M$ de financiación de la CHIPS Act."
      }
     ]
    }
   ],
   "citas": [
    {
     "texto": "we are experiencing extreme pricing conditions in memory",
     "quien": "Colette Kress, CFO",
     "contexto": "NVIDIA, call del 2T FY27"
    },
    {
     "texto": "I think we are in the start of a cycle that is very, very broad",
     "quien": "Haviv Ilan, CEO",
     "contexto": "Texas Instruments, call del 2T26"
    },
    {
     "texto": "consumer and price-sensitive end market segments are being challenged",
     "quien": "C. C. Wei, CEO",
     "contexto": "TSMC, call del 2T26"
    }
   ],
   "pulso": {
    "etiqueta": "Después del trimestre · conferencia de NVIDIA del 10 de septiembre",
    "titulo": "NVIDIA reitera el +70% para FY28 y pone el foco en la oferta y la financiación",
    "parrafos": [
     "En la conferencia de Goldman Sachs del 10 de septiembre, Huang reitera la confianza en crecer ~70% en FY28 y dice disponer de un año para mejorar la oferta. Enumera como tensionados el empaquetado, la DRAM, la LPDDR, los conectores, los reguladores de voltaje y las obleas, además del suelo y la energía para centros de datos.",
     "Sobre la financiación, espera que la mayor parte de las plataformas de $500B esté respaldada por activos y vuelve a rechazar que sea circular. TI y TSMC no han publicado actualizaciones después de sus calls de julio."
    ],
    "bullets": [
     {
      "e": "NVDA",
      "t": "Acuerdo con Australia por 2 GW para 2027 (~$80B)."
     },
     {
      "e": "NVDA",
      "t": "Economía del cómputo según el CEO: ~$60B de inversión por GW e ingresos de alquiler de ~$50B al año por GW (cifra aproximada)."
     }
    ]
   },
   "macroIntro": "Los semiconductores describen una economía de dos velocidades: **inversión en IA sin freno visible y limitada por la capacidad**, una industria que se recupera y un consumo electrónico que paga el encarecimiento de los componentes.",
   "macro": [
    {
     "tema": "Inversión en IA",
     "texto": "Data Center +117% en NVIDIA y HPC en el 66% de TSMC; NVIDIA cita un capex de los cinco mayores hyperscalers de ~$800B en 2026 y $1,3T en 2027, con creciente apoyo de financiación externa y garantías.",
     "vs": "Frente al 1T: acelera y la restricción se desplaza a la oferta."
    },
    {
     "tema": "Ciclo industrial y automoción",
     "texto": "Industrial ~+30% y automoción en la franja media de dos dígitos en TI, con crecimiento en todas las regiones; destacan infraestructura energética, test & measurement, defensa y robótica.",
     "vs": "Frente al 1T: se consolida y se suma la automoción."
    },
    {
     "tema": "Consumo electrónico",
     "texto": "Smartphone −4% intertrimestral en TSMC, electrónica personal plana en TI y PC de consumo más lento en NVIDIA; las tres compañías lo vinculan al precio de componentes y memoria.",
     "vs": "Frente al 1T: el smartphone ya caía (−11% intertrimestral); ahora se añade la presión de costes."
    },
    {
     "tema": "Precios de componentes",
     "texto": "Memoria en condiciones de precio extremas, primeras subidas de TI tras un semestre plano y equipos más caros para TSMC: apunta a un giro inflacionista en partes de la cadena.",
     "vs": "Frente al 1T: nuevo foco; el informe anterior no recogía subidas de precio."
    },
    {
     "tema": "Comercio y China",
     "texto": "NVIDIA mantiene China fuera de su guía, con H200 por debajo del 1% de Data Center y un arancel del 25% no repercutido. En TI, China pesa el 22% y lidera la aceleración en automoción.",
     "vs": "Frente al 1T: sin cambios en las restricciones; China aporta demanda por la vía del automóvil."
    },
    {
     "tema": "Energía",
     "texto": "Suelo, energía y edificio deben asegurarse con 2–3 años de antelación y NVIDIA interviene en la generación eléctrica. En TI, el coste del combustible impulsa eléctricos e híbridos en China.",
     "vs": "Frente al 1T: la energía pasa a ser una restricción física explícita del despliegue de IA."
    }
   ],
   "vigilar": [
    "Rampa de Vera Rubin (≈20% de Data Center en el 3T) y si la oferta permite el ~+70% de FY28.",
    "Coste de la memoria: margen bruto de NVIDIA hacia el 71–72% y traslado a smartphone y PC.",
    "Si la recuperación de TI en industrial y auto se sostiene sin acumulación de inventario en clientes; plazos y subidas de precio.",
    "Capex y capacidad de TSMC en N2, N3 y empaquetado, y el margen con la dilución de N2 y de las fábricas en el extranjero.",
    "Balance de NVIDIA: DSO, garantías, financiación de laboratorios y concentración de clientes.",
    "China: licencias de H200, aranceles y peso de la demanda china en automoción."
   ],
   "proximo": "Próximos resultados: TSMC a mediados de octubre, Texas Instruments previsiblemente a finales de octubre y NVIDIA el 17-nov-2026 (3T FY27).",
   "cobertura": [
    {
     "empresa": "NVIDIA",
     "fiscal": "2T FY2027",
     "meses": "may–jul",
     "publicado": "26-ago-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27pr.htm"
      },
      {
       "t": "Comentario del CFO",
       "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27cfocommentary.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000075/nvda-20260726.htm"
      },
      {
       "t": "Call 26-ago y conferencia 10-sep"
      }
     ]
    },
    {
     "empresa": "Texas Instruments",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "22-jul-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/97476/000009747626000148/q22026txnex99-eredgar.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/97476/000009747626000152/txn-20260630.htm"
      },
      {
       "t": "Call 22-jul"
      }
     ]
    },
    {
     "empresa": "TSMC",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "16-jul-2026",
     "docs": [
      {
       "t": "Resultados trimestrales (web IR)",
       "url": "https://investor.tsmc.com/english/quarterly-results"
      },
      {
       "t": "Call 16-jul"
      }
     ]
    }
   ],
   "metodo": "Trimestre natural: cada compañía se asigna al trimestre natural con el que comparte más días de su periodo fiscal. NVIDIA entra con su 2T FY27 (27-abr a 26-jul-2026), que solapa sobre todo con abr–jun; TI y TSMC cierran en junio. TSMC no reporta en la SEC y solo se ha usado el transcript de su call, por lo que faltan varias cifras (N/D). Cifras según las publican las compañías; lo calculado se marca «calc.» y las referencias del 1T no presentes en los documentos del trimestre proceden del informe anterior. La conferencia de NVIDIA de septiembre se refiere al trimestre en curso y se presenta por separado.",
   "glosario": [
    {
     "t": "Data Center / Hyperscale / ACIE",
     "d": "Plataforma de centros de datos de NVIDIA: grandes proveedores cloud frente a AI clouds, industria y empresas."
    },
    {
     "t": "HPC",
     "d": "Computación de alto rendimiento; en TSMC agrupa aceleradores de IA, CPU y chips de servidor."
    },
    {
     "t": "Nodo avanzado",
     "d": "Tecnología de fabricación de 7 nm o inferior (N7, N5, N3, N2)."
    },
    {
     "t": "Empaquetado avanzado (CoWoS)",
     "d": "Integración de chips y memoria en un mismo encapsulado, esencial para los aceleradores de IA."
    },
    {
     "t": "Días de inventario",
     "d": "Inventario expresado en días de coste de ventas; mide cuánto stock cubre la demanda."
    },
    {
     "t": "Plazo de entrega (lead time)",
     "d": "Tiempo entre pedido y entrega; su alargamiento indica un mercado que se tensa."
    },
    {
     "t": "Compromisos de suministro",
     "d": "Obligaciones de compra de capacidad y componentes (sobre todo memoria) firmadas con proveedores."
    },
    {
     "t": "Vera Rubin",
     "d": "Nueva plataforma de NVIDIA que sucede a Blackwell; envíos de producción desde agosto de 2026."
    }
   ]
  }
 ],
 "transport": [
  {
   "sector": "transport",
   "trimestre": "2026-2T",
   "sectorNombre": "Transporte / Logística",
   "label": "2T 2026",
   "labelAnterior": "1T 2026",
   "meses": "abr–jun 2026",
   "publicado": "18-sep-2026",
   "empresas": [
    {
     "id": "FDX",
     "nombre": "FedEx"
    },
    {
     "id": "UPS",
     "nombre": "UPS"
    },
    {
     "id": "UNP",
     "nombre": "Union Pacific"
    }
   ],
   "titulo": "Precio y gasóleo, no volumen: los ingresos crecen a doble dígito, el combustible aprieta márgenes, UPS cierra el ajuste de Amazon y el intermodal gana carga al camión",
   "tarjeta": "Crecen ingresos por precio y gasóleo, no por volumen; UPS cierra el ajuste de Amazon y el intermodal gana al camión",
   "drivers": "volúmenes (paquetes, carloads, envíos LTL) · ingreso por pieza y tarifa base · recargos de combustible · mix B2B/B2C · comercio internacional · margen y ratio operativo",
   "pregunta": {
    "q": "¿Empieza a recuperarse el volumen o el sector sigue creciendo solo por precio?",
    "a": "Sobre todo por precio y, este trimestre, también por combustible. Los ingresos crecen entre el 7,6% (UPS) y el 13% (FedEx), pero el volumen físico apenas se mueve: paquetes diarios de FedEx +2%, de UPS −3,7% y carloads de Union Pacific +2%. Hay señales de mejora en B2B, en la carga industrial por ferrocarril y en el intermodal doméstico, que gana tráfico a un camión con capacidad tensionada; el LTL, en cambio, sigue débil."
   },
   "takeaways": [
    {
     "lead": "El crecimiento de ingresos es sobre todo nominal.",
     "texto": "En Union Pacific, de los +12% de ingresos de transporte, 750 pb son recargo de combustible, 225 pb volumen y 175 pb precio y mix. En UPS EE.UU., el volumen resta 3,3 puntos y tarifas/mix y combustible suman 5,2 y 4,1. En Federal Express, el recargo explica ~5 pp del +14%."
    },
    {
     "lead": "El gasóleo se traslada al cliente, pero resta margen.",
     "texto": "El gasto en combustible sube un 66% en FedEx, un 60,4% en UPS y un 63% en Union Pacific. El recargo protege el beneficio en dólares, no el margen: −120 pb en el ratio operativo de Union Pacific y en el margen internacional de UPS. Ninguna ve aún destrucción de demanda."
    },
    {
     "lead": "UPS completa la salida de Amazon y el margen de EE.UU. lo refleja.",
     "texto": "El *glide down* terminó en junio: ~2 M de piezas diarias y ~4.500 M$ de gastos fuera; Amazon pesa ya el 9% de los ingresos. El ADV de EE.UU. cae un 3,3% (crece sin Amazon, según la compañía) y el margen ajustado de EE.UU. sube al 8,0% (7,0% un año antes)."
    },
    {
     "lead": "B2B y carga industrial mejoran en paquetería y ferrocarril; el LTL no.",
     "texto": "FedEx vive su mejor trimestre del ejercicio en B2B y cita algo de reposición de inventarios; el B2B de UPS cae un 3,2%, 190 pb menos que en el 1T; los carloads industriales de Union Pacific suben un 3%. FedEx Freight, en cambio, pierde un 6% de envíos diarios y 570 pb de margen ajustado."
    },
    {
     "lead": "El comercio se reordena por rutas más que contraerse.",
     "texto": "La exportación de FedEx crece un 5% en paquetes y la ruta China–EE.UU. de UPS vuelve a crecer desde mayo. Canadá–EE.UU. (aranceles) y la exportación europea (Oriente Medio) siguen débiles; el intermodal internacional de Union Pacific cae un 14%."
    }
   ],
   "cambios": [
    {
     "kpi": "Volumen de paquetería",
     "dir": "Se modera la caída",
     "texto": "UPS pasa de un ADV consolidado del −7,7% en el 1T al −3,7%; FedEx mantiene crecimiento (ADV total +2%, EE.UU. +3%)."
    },
    {
     "kpi": "Precio / yield",
     "dir": "Acelera, con combustible",
     "texto": "Yield doméstico EE.UU. de FedEx de +5% a +10%; ingreso por pieza de UPS de +7,7% a +11,3%. En Union Pacific el recargo de combustible pasa de aportar +1,0 pp al crecimiento a +7,5 pp; el precio y mix, de 3,25 puntos a 1,75."
    },
    {
     "kpi": "Combustible",
     "dir": "Nuevo viento en contra",
     "texto": "No figuraba como presión en el 1T. Ahora el gasto sube un 60–66% en las tres compañías y resta 120 pb al ratio operativo de Union Pacific."
    },
    {
     "kpi": "Márgenes",
     "dir": "Mejora secuencial",
     "texto": "UPS del 6,2% ajustado en el 1T (calculado) al 9,2% (4,1% GAAP por el Driver Choice); FedEx del 6,7% al 8,4% ajustado; ratio operativo de Union Pacific del 60,5% al 59,7%. Interanualmente, FedEx y Union Pacific empeoran."
    },
    {
     "kpi": "Volumen ferroviario",
     "dir": "Gira a positivo",
     "texto": "Carloads de −1% a +2%; intermodal de −9% a +4% (internacional de −28% a −14%)."
    },
    {
     "kpi": "LTL",
     "dir": "Sigue débil",
     "texto": "FedEx Freight: envíos mensuales entre −4% y −8% en el 1T; −6% en el 2T, con margen ajustado de nuevo unos 570–580 pb por debajo del año anterior."
    }
   ],
   "seguimiento": [
    {
     "kpi": "FedEx: volumen y yield a la vez",
     "dir": "Se cumple",
     "texto": "ADV +2% y yield +11% (~5 pp por combustible). Reduce a propósito ground economy (~−5%) e international domestic (−9%)."
    },
    {
     "kpi": "FedEx Freight y ciclo LTL",
     "dir": "Sin recuperación",
     "texto": "Envíos diarios −6% y margen ajustado 15,1% (−570 pb), por producción industrial débil y exceso de capacidad según el 10-K."
    },
    {
     "kpi": "Network 2.0 y spin-off de Freight",
     "dir": "Avanza / completado",
     "texto": "Network 2.0 pasa del 35% al ~45% del volumen elegible (~490 estaciones a finales de junio). Freight se separó el 1-jun; FedEx retiene el 19,9% (calculado)."
    },
    {
     "kpi": "Amazon en UPS y margen",
     "dir": "Completado",
     "texto": "El plan terminó en junio; Amazon es el 9% de los ingresos y el margen ajustado de EE.UU. sube al 8,0% (+100 pb)."
    },
    {
     "kpi": "Edificios, capacidad y productividad en UPS",
     "dir": "Continúa",
     "texto": "45 edificios cerrados en el 1S26, ~30.000 puestos operativos menos que en el 1S25 y un 68,5% del volumen de EE.UU. automatizado (64% hace un año)."
    },
    {
     "kpi": "Intermodal internacional y comercio global",
     "dir": "Mejora desde mínimos",
     "texto": "Union Pacific −14% (−28% en el 1T); China–EE.UU. vuelve a crecer en UPS; exportación de FedEx +5%."
    },
    {
     "kpi": "Carloads por segmento (UNP)",
     "dir": "Mixto",
     "texto": "Industrial +3% (+4% en el 1T), automoción 0% (−6%), grano +12% (+14%) y carbón −14% (+16%), por el gas natural barato."
    },
    {
     "kpi": "Precio frente a volumen real",
     "dir": "El precio sigue mandando",
     "texto": "El volumen explica una parte menor del crecimiento en las tres; UPS prevé moderar su ingreso por pieza en EE.UU. al ~4–4,5% en el 2S."
    },
    {
     "kpi": "Costes laborales y combustible",
     "dir": "Se endurecen",
     "texto": "Combustible +60–66%; compensación por empleado ~+6% en Union Pacific; 200 M$ en 2026 por el convenio de pilotos de FedEx."
    },
    {
     "kpi": "Ciclo de inventarios",
     "dir": "Primeros indicios",
     "texto": "FedEx habla de *a little bit of inventory buildup and restocking*; Union Pacific ve pedidos de vagones *up slightly* y un pequeño impulso macro en industrial."
    }
   ],
   "scorecard": [
    {
     "titulo": "Resultados",
     "filas": [
      {
       "kpi": "Ingresos",
       "nota": "variación interanual",
       "v": {
        "FDX": {
         "v": "$25,0B · +13%",
         "c": "Incluye Freight ($2,4B, +5%)"
        },
        "UPS": {
         "v": "$22,8B · +7,6%",
         "c": "1T26: −1,6% interanual"
        },
        "UNP": {
         "v": "$6,86B · +12%",
         "c": "Sin recargo de combustible ~$5,5B, +4%"
        }
       }
      },
      {
       "kpi": "Margen operativo",
       "nota": "ajustado",
       "v": {
        "FDX": {
         "v": "8,4%",
         "c": "4T FY25: 9,1%; GAAP 6,2% (8,1%)"
        },
        "UPS": {
         "v": "9,2%",
         "c": "+40 pb; GAAP 4,1% (8,6%)"
        },
        "UNP": {
         "v": "Ratio operativo 59,2%",
         "c": "2T25: 58,1%; GAAP 59,7% (1T26: 60,5%)"
        }
       }
      },
      {
       "kpi": "Beneficio operativo ajustado",
       "v": {
        "FDX": {
         "v": "$2,09B · +3%",
         "c": "GAAP $1,55B, −13%"
        },
        "UPS": {
         "v": "$2,10B · +12,0%",
         "c": "GAAP 930 M$, −49,0%"
        },
        "UNP": {
         "v": "$2,80B · +8,4% (calculado)",
         "c": "GAAP $2,76B, +9%"
        }
       }
      },
      {
       "kpi": "BPA ajustado",
       "nota": "variación interanual",
       "v": {
        "FDX": {
         "v": "$6,31 · +4,0% (calculado)",
         "c": "GAAP $6,60"
        },
        "UPS": {
         "v": "$1,76 · +13,5%",
         "c": "GAAP $0,71 por el Driver Choice"
        },
        "UNP": {
         "v": "$3,41 · +13%",
         "c": "GAAP $3,36, +7%"
        }
       }
      }
     ]
    },
    {
     "titulo": "Indicadores sectoriales",
     "filas": [
      {
       "kpi": "Volumen",
       "nota": "paquetes diarios / carloads",
       "v": {
        "FDX": {
         "v": "17,1 M/día · +2%",
         "c": "EE.UU. +3%; ground economy ~−5%"
        },
        "UPS": {
         "v": "19,0 M/día · −3,7%",
         "c": "EE.UU. −3,3%; crece sin Amazon"
        },
        "UNP": {
         "v": "2,16 M carloads · +2%",
         "c": "1T26: 2,08 M; +3,8% trimestral (calculado)"
        }
       }
      },
      {
       "kpi": "Ingreso por unidad",
       "v": {
        "FDX": {
         "v": "$17,90/paquete · +11%",
         "c": "EE.UU. $15,58, +10%; ~5 pp por combustible"
        },
        "UPS": {
         "v": "$15,96/pieza · +11,3%",
         "c": "EE.UU. $14,24, +9,3%; más de la mitad, tarifa y mix"
        },
        "UNP": {
         "v": "$3.014/carload · +9%",
         "c": "Precio core y mix: +175 pb de crecimiento"
        }
       }
      },
      {
       "kpi": "B2B / industrial",
       "v": {
        "FDX": {
         "v": "Ground commercial +4%",
         "c": "Mejor trimestre del ejercicio en B2B"
        },
        "UPS": {
         "v": "B2B −3,2%",
         "c": "190 pb mejor que el 1T; pymes +4,3%"
        },
        "UNP": {
         "v": "Industrial +3%",
         "c": "Metales y químicos +3%; vivienda blanda"
        }
       }
      },
      {
       "kpi": "LTL / intermodal",
       "v": {
        "FDX": {
         "v": "Freight: envíos −6%",
         "c": "Margen ajustado 15,1% (−570 pb)"
        },
        "UPS": {
         "v": "N/D",
         "c": "Sin negocio LTL en la muestra"
        },
        "UNP": {
         "v": "Intermodal +4%",
         "c": "Doméstico +19%; internacional −14%"
        }
       }
      },
      {
       "kpi": "Internacional",
       "v": {
        "FDX": {
         "v": "Exportación ADV +5%",
         "c": "Libras de carga aérea de exportación +12%"
        },
        "UPS": {
         "v": "Exportación ADV −4,2%",
         "c": "China–EE.UU. crece desde mayo; Asia–Asia +13,6%"
        },
        "UNP": {
         "v": "México: ingresos +10%",
         "c": "Volumen +5% (10-Q)"
        }
       }
      },
      {
       "kpi": "Combustible",
       "nota": "gasto, variación interanual",
       "v": {
        "FDX": {
         "v": "+66%",
         "c": "1.434 M$"
        },
        "UPS": {
         "v": "+60,4%",
         "c": "1.697 M$"
        },
        "UNP": {
         "v": "+63%",
         "c": "Gasóleo 3,86 $/galón (+60%)"
        }
       }
      },
      {
       "kpi": "Margen del negocio principal",
       "nota": "ajustado",
       "v": {
        "FDX": {
         "v": "Federal Express 8,9%",
         "c": "4T FY25: 9,0%; ~20 pb por combustible"
        },
        "UPS": {
         "v": "EE.UU. 8,0%",
         "c": "+100 pb; internacional 12,4% (15,2%)"
        },
        "UNP": {
         "v": "Ratio operativo 59,2%",
         "c": "~58% sin ruido de combustible, según la dirección"
        }
       }
      },
      {
       "kpi": "Eficiencia y red",
       "v": {
        "FDX": {
         "v": "Network 2.0: ~45% del volumen elegible",
         "c": "~490 estaciones a finales de junio"
        },
        "UPS": {
         "v": "68,5% del volumen automatizado",
         "c": "64% hace un año"
        },
        "UNP": {
         "v": "Productividad de plantilla +5%",
         "c": "Plantilla media −3%; velocidad de vagón +5%"
        }
       }
      }
     ]
    }
   ],
   "scorecardNota": "B = miles de millones; M = millones. FedEx: 4T del ejercicio fiscal 2026 (mar–may), consolidado con FedEx Freight. Volúmenes no homogéneos: paquetes diarios en paquetería y carloads en ferrocarril (en intermodal, cada contenedor o remolque cuenta como uno). El ratio operativo de Union Pacific son costes sobre ingresos: cuanto más bajo, mejor. Variaciones según las publica cada compañía; lo calculado, marcado.",
   "companias": [
    {
     "e": "FDX",
     "nombre": "FedEx",
     "titular": "Último trimestre con Freight y nueva guidance por año natural",
     "texto": "Ingresos +13% y BPA ajustado de $6,31, por encima del rango previsto. FedEx Freight se separó el 1 de junio (cotiza como FDXF), así que este 4T aún lo incluye; como el ejercicio pasa a cerrar en diciembre (jun–dic es un año de transición de 7 meses), la guidance ya es de **año natural 2026 y sin Freight**: ingresos ~+11% (~3 pp de combustible) y BPA ajustado de $16,90–18,10. No recurrentes: MTM de pensiones y 298 M$ de costes del spin-off."
    },
    {
     "e": "UPS",
     "nombre": "UPS",
     "titular": "Termina el ajuste de Amazon y el margen de EE.UU. se recupera",
     "texto": "Volumen −3,7%, pero BO ajustado +12% y margen de EE.UU. del 8,0%. Eleva la guía de 2026 (ingresos ~91.200 M$, BPA ajustado ~$7,22). Excluye 1.172 M$ de costes del Driver Choice Program, de salidas voluntarias de conductores (891 M$ netos, $1,05 por acción)."
    },
    {
     "e": "UNP",
     "nombre": "Union Pacific",
     "titular": "Más volumen, ratio operativo lastrado por el gasóleo y fusión en marcha",
     "texto": "Carloads +2% y ratio operativo ajustado del 59,2% (+110 pb), 120 pb de ello por combustible, aunque el efecto neto con el recargo suma $0,14 al BPA. Sube la guía de BPA a un dígito alto y prevé una compensación por empleado ~+6%. Fusión con Norfolk Southern: solicitud aceptada por la STB, cierre previsto en 2027 y recompras pausadas."
    }
   ],
   "exhibits": [
    {
     "titulo": "El ingreso por paquete en EE.UU. sube en torno a un 10% en las dos redes",
     "sub": "Ingreso por paquete doméstico EE.UU., $. FedEx: compuesto de Federal Express (4T FY25 y 4T FY26, mar–may); UPS: total EE.UU. (abr–jun)",
     "tipo": "bar",
     "unidad": "",
     "dec": 2,
     "cero": true,
     "trimestres": [
      "2T25",
      "2T26"
     ],
     "series": {
      "FDX": [
       14.22,
       15.58
      ],
      "UPS": [
       13.03,
       14.24
      ]
     },
     "fuente": "nota de resultados de FedEx y tablas financieras de UPS."
    },
    {
     "titulo": "El gasóleo dispara el gasto en combustible entre un 60% y un 66%",
     "sub": "Gasto en combustible, variación interanual del trimestre, %",
     "tipo": "bar",
     "unidad": "%",
     "dec": 1,
     "cero": true,
     "trimestres": [
      "2T26"
     ],
     "series": {
      "FDX": [
       66
      ],
      "UPS": [
       60.4
      ],
      "UNP": [
       63
      ]
     },
     "fuente": "notas de resultados y tablas financieras de las compañías. FedEx: consolidado, mar–may."
    },
    {
     "titulo": "El intermodal y el grano tiran de los carloads; el carbón cae",
     "sub": "Union Pacific: carloads por mercancía, variación interanual en el 2T26, %",
     "tipo": "bar",
     "unidad": "%",
     "dec": 0,
     "trimestres": [
      "Carbón",
      "Fertilizantes",
      "Alimentación",
      "Automoción",
      "Forestal",
      "Químicos",
      "Metales",
      "Energía",
      "Intermodal",
      "Grano"
     ],
     "series": {
      "UNP": [
       -14,
       -2,
       -2,
       0,
       2,
       3,
       3,
       3,
       4,
       12
      ]
     },
     "fuente": "nota de resultados de Union Pacific."
    },
    {
     "titulo": "El margen de UPS en EE.UU. se recupera al completar la salida de Amazon",
     "sub": "UPS U.S. Domestic: margen operativo ajustado, %. 1T26 calculado a partir del semestre",
     "tipo": "bar",
     "unidad": "%",
     "dec": 1,
     "cero": true,
     "trimestres": [
      "2T25",
      "1T26",
      "2T26"
     ],
     "series": {
      "UPS": [
       7.0,
       4.0,
       8.0
      ]
     },
     "fuente": "nota de resultados, tablas financieras y call de UPS."
    }
   ],
   "temas": [
    {
     "titulo": "Precio y combustible, no volumen, explican el crecimiento",
     "parrafos": [
      "Las tres compañías desglosan sus ingresos y el patrón coincide. En Union Pacific, el recargo de combustible aporta 750 pb de los +12% de ingresos de transporte, frente a 225 pb de volumen y 175 pb de precio core y mix; sin recargo, crecen un 4%. En UPS EE.UU., el volumen resta 3,3 puntos y tarifas/mix y combustible suman 5,2 y 4,1. En FedEx, el yield de Federal Express sube un 11% con ~5 pp de recargo, aunque la mayor parte del beneficio incremental por yield vino de la tarifa base.",
      "La lectura es que **el crecimiento nominal sobrestima la demanda física**. El poder de precio existe (UPS habla de un entorno *rational*), pero tiene fecha: UPS espera que su ingreso por pieza en EE.UU. se modere al ~4–4,5% en el 2S, frente al 9,3% del 2T, al comparar con las subidas de 2025."
     ],
     "evidencias": [
      {
       "e": "UPS",
       "t": "Ingreso por pieza en EE.UU. 130 pb por encima del coste por pieza (+9,3% frente a +8,0%); objetivo de diferencial de 50–100 pb en adelante."
      },
      {
       "e": "UNP",
       "t": "El mix fue un ligero viento en contra porque el intermodal doméstico, de menor ingreso por carload, creció más de lo previsto."
      }
     ]
    },
    {
     "titulo": "El gasóleo: un shock de costes que se traslada, pero comprime márgenes",
     "parrafos": [
      "El gasóleo de Union Pacific sube a 3,86 $/galón (+60%) y el gasto en combustible crece un 60–66% en las tres compañías. Los recargos trasladan el coste: FedEx dice que el mecanismo funcionó *exactly the way it was designed to act* y Union Pacific cifra el efecto neto en +$0,14 de BPA. Pero al inflar ingresos y costes a la vez, **reducen el margen**: −120 pb en el ratio operativo de Union Pacific y en el margen internacional de UPS, ~20 pb en Federal Express.",
      "UPS añade un canal menos visible: el transporte comprado sube un 26,4% por chárter y desvíos ligados a Oriente Medio y aviones arrendados tras retirar los MD-11. Nadie observa aún destrucción de demanda, aunque Union Pacific lo señala como riesgo, y la guidance de FedEx incorpora ~3 pp de recargo en 2026, lo que supone energía cara de forma persistente."
     ],
     "evidencias": [
      {
       "e": "UPS",
       "t": "Recargos +575 M$ en EE.UU. y +429 M$ en internacional, *primarily due to the Middle East conflict* (10-Q); efecto neto en beneficio *modest*."
      },
      {
       "e": "UNP",
       "t": "Sin el ruido del combustible, la dirección habla de un ratio operativo subyacente en torno al 58%; cifra de gestión, no auditada."
      }
     ]
    },
    {
     "titulo": "Paquetería: UPS cierra el ajuste de Amazon y el sector gira hacia B2B y pymes",
     "parrafos": [
      "UPS da por completado en junio el plan de reducción de volumen de Amazon: ~2 M de piezas diarias y ~4.500 M$ de gastos eliminados, con el volumen del mayor cliente más de un 50% por debajo del de 2024. Desde 2024 ha suprimido cerca de 78.000 puestos operativos y cerrado cerca de 150 edificios. El margen de EE.UU. sube al 8,0% con un 3,3% menos de volumen; el efecto base de Amazon pesará en el volumen hasta el 1S27.",
      "FedEx sigue la misma lógica: reduce ground economy (~−5%) y crece en B2B, pymes (doble dígito), salud y centros de datos. Las dos redes **priorizan la calidad del ingreso sobre la escala**, de modo que parte de la debilidad de volumen es estratégica y no solo cíclica."
     ],
     "evidencias": [
      {
       "e": "UPS",
       "t": "Pymes: +4,3% y 34,5% del volumen de EE.UU. (+250 pb); B2C −3,5%; ADV aéreo −2,3%, +1,2% sin Amazon."
      },
      {
       "e": "FDX",
       "t": "Renovación de clientes en torno al 95% (*mid-90s*); no ve una propuesta nueva en la entrada de Amazon en logística para pymes."
      }
     ]
    },
    {
     "titulo": "Carga industrial: el ferrocarril mejora, el LTL no",
     "parrafos": [
      "Los carloads industriales de Union Pacific suben un 3% (metales, químicos, energía), con la vivienda todavía blanda. El intermodal doméstico crece un 19%, cuarto trimestre récord, por captación de negocio y menor capacidad del camión. En granel, grano +12% por la exportación y carbón −14% por inventarios altos y gas barato.",
      "El LTL cuenta otra historia: FedEx Freight pierde un 6% de envíos diarios y 570 pb de margen ajustado, y el 10-K lo atribuye a producción industrial débil, incertidumbre comercial y exceso de capacidad. La divergencia sugiere una **mejora industrial todavía estrecha**, apoyada en segmentos concretos y en la sustitución del camión por el tren, más que un ciclo amplio de carga pesada."
     ],
     "evidencias": [
      {
       "e": "UNP",
       "t": "Pedidos de vagones *up slightly*; unas 200 peticiones de información en la cartera de desarrollo industrial, entre ellas centros de datos."
      },
      {
       "e": "FDX",
       "t": "Freight: peso por envío +3% e ingreso por envío +11%, con menos envíos (priority −5%, economy −8%)."
      }
     ]
    },
    {
     "titulo": "Comercio y estructura: rutas que se reordenan y un sector que cambia de forma",
     "parrafos": [
      "El comercio se reordena. La ruta China–EE.UU. de UPS vuelve a crecer desde mayo, al cumplirse un año del fin del de minimis chino, y la compañía espera un efecto base favorable en el 4T por el fin del de minimis global. FedEx crece a doble dígito en exportación Asia–Europa, intra-Asia y desde EE.UU. En cambio, los aranceles reducen el volumen Canadá–EE.UU., la mayor ruta de UPS, y el intermodal internacional de Union Pacific cae un 14%. La anulación de los aranceles IEEPA genera reembolsos que se devuelven a los clientes: FedEx ha reclamado $3,3B y cobrado ~800 M$; UPS tiene ~500 M$ aprobados.",
      "Cambia también el perímetro del sector. FedEx separa su negocio LTL desde el 1 de junio y Union Pacific avanza en la compra de Norfolk Southern: la STB aceptó la solicitud el 28 de mayo, lo que abre un plazo legal de un año, y el acuerdo con CN del 22 de julio resuelve la propiedad de las terminales de Kansas City y St. Louis. El cierre sigue previsto para 2027."
     ],
     "evidencias": [
      {
       "e": "FDX",
       "t": "Exportación internacional: paquetes +5% y libras de carga aérea +12%; APAC encadena dos trimestres de crecimiento de volumen."
      },
      {
       "e": "UPS",
       "t": "Exportaciones Asia–Asia +13,6%; la exportación europea cae sobre todo por la disrupción en Oriente Medio."
      },
      {
       "e": "UNP",
       "t": "Fusión: 1 acción de UNP más $88,82 por acción de NSC, comisión de ruptura recíproca de $2,5B y 35 M$ de costes en el trimestre."
      }
     ]
    }
   ],
   "citas": [
    {
     "texto": "This reconfiguration was never the destination. It was the foundation.",
     "quien": "Carol Tomé, CEO",
     "contexto": "UPS, call del 2T26"
    },
    {
     "texto": "We have seen no impact to demand because of the elevated fuel prices.",
     "quien": "Carere, equipo directivo",
     "contexto": "FedEx, call del 4T FY26"
    },
    {
     "texto": "The merger is going to close. It's just too compelling for the country.",
     "quien": "Vena, equipo directivo",
     "contexto": "Union Pacific, call del 2T26"
    }
   ],
   "pulso": {
    "etiqueta": "Después del trimestre · conferencia de Union Pacific del 16 de septiembre",
    "titulo": "El volumen ferroviario acelera en el 3T, pero el gasóleo supera los 5 $ por galón",
    "parrafos": [
     "En la conferencia de Morgan Stanley del 16 de septiembre, Union Pacific sitúa sus carloads del 3T *up around 5%*, con industrial en +5,2% en lo que va de mes, granel en torno a −1% y el intermodal doméstico camino de su quinto trimestre récord. La dirección ve a sus clientes *pretty bullish*. El coste es el combustible: ya paga 5,20–5,30 $/galón y espera un efecto en el ratio operativo igual o mayor que los 120 pb del 2T; a la vez, el gasóleo caro estaría empujando conversiones del camión al tren.",
     "FedEx y UPS no han publicado actualizaciones posteriores, solo guidance: UPS prevé para el 3T un ADV de EE.UU. con caída de un dígito medio y un margen de EE.UU. de ~7%; FedEx espera que el 3T natural sea el más débil de su año de transición."
    ],
    "bullets": [
     {
      "e": "UNP",
      "t": "No espera un nuevo aumento sustancial de doble dígito en los segmentos ligados al pico; en intermodal, las subidas de precio llegarían sobre todo con las licitaciones de 2027."
     },
     {
      "e": "UNP",
      "t": "Fusión: decisión de la STB prevista en torno al 28-may-2027 más 30 días; más de 2.000 cartas de apoyo."
     }
    ]
   },
   "macroIntro": "El transporte describe una economía que **mueve algo más de carga industrial y B2B, pero crece más en dólares que en unidades**: el precio y el gasóleo inflan los ingresos, el comercio se reordena por rutas y el LTL sigue sin despegar.",
   "macro": [
    {
     "tema": "Actividad industrial",
     "texto": "Carloads industriales +3% en Union Pacific, B2B en su mejor trimestre del ejercicio en FedEx y menos caída en UPS; en contra, envíos LTL −6%. Apunta a una mejora moderada y desigual.",
     "vs": "Frente al 1T: mejora en ferrocarril y B2B de paquetería; el LTL no acompaña."
    },
    {
     "tema": "Comercio y aranceles",
     "texto": "China–EE.UU. vuelve a crecer y Asia–Europa, intra-Asia y Asia–México avanzan; Canadá–EE.UU. y la exportación europea caen. Los reembolsos IEEPA se devuelven a los clientes desde agosto.",
     "vs": "Frente al 1T: el intermodal internacional pasa de −28% a −14% y las rutas afectadas por el de minimis dejan de restar."
    },
    {
     "tema": "Consumo y e-commerce",
     "texto": "El B2C de UPS cae un 3,5% y el retail lastra su B2B; FedEx crece un 2% en home delivery/economy. Parte de la debilidad es estratégica, pero no hay señales de repunte del paquete de consumo.",
     "vs": "Frente al 1T: sin cambios de fondo; la caída de UPS se modera al terminar Amazon."
    },
    {
     "tema": "Energía y combustible",
     "texto": "Gasóleo a 3,86 $/galón (+60%) por el conflicto de Oriente Medio. Se traslada vía recargos sin destrucción de demanda visible, pero comprime márgenes y podría alimentar la inflación de bienes.",
     "vs": "Frente al 1T: nuevo shock; el recargo pasa de aportar 1,0 pp a 7,5 pp al crecimiento de Union Pacific."
    },
    {
     "tema": "Empleo y salarios",
     "texto": "Menos plantilla por automatización (UPS, ~30.000 puestos operativos menos que en el 1S25; Union Pacific, −3%) y más coste por empleado: compensación ~+6% en Union Pacific y nuevo convenio de pilotos en FedEx.",
     "vs": "Frente al 1T: los recortes continúan (Union Pacific −5% en el 1T) y la presión salarial aumenta."
    },
    {
     "tema": "Transporte por carretera",
     "texto": "Capacidad del camión restringida: el intermodal doméstico gana tráfico (+19%) y Union Pacific ha sacado casi todos sus contenedores almacenados.",
     "vs": "Frente al 1T: el intermodal pasa de −9% a +4%."
    }
   ],
   "vigilar": [
    "Gasóleo: si los 5,20–5,30 $/galón de septiembre empiezan a destruir demanda y cuánto restan al margen del 3T.",
    "UPS sin Amazon: caída de ADV de un dígito medio prevista en el 3T, crecimiento sin Amazon en el 2S y moderación del ingreso por pieza al ~4–4,5%.",
    "FedEx sin Freight: primer periodo (jun–sep, 28-oct) frente a la guidance; la muestra pierde su lectura directa del LTL.",
    "Carga industrial: si se sostiene el +5,2% industrial de Union Pacific en el 3T y cómo evoluciona el carbón.",
    "Comercio: China–EE.UU., efecto base del de minimis global en el 4T, intermodal internacional en positivo y devolución de reembolsos IEEPA.",
    "Temporada alta y precios: recargos de pico, precios *racionales* en paquetería y licitaciones intermodales de 2027.",
    "Fusión Union Pacific–Norfolk Southern: tramitación en la STB y oposición."
   ],
   "proximo": "Próximos resultados: 3T 2026, entre finales de octubre y principios de noviembre; FedEx publica el 28 de octubre (jun–sep).",
   "cobertura": [
    {
     "empresa": "FedEx",
     "fiscal": "4T FY26",
     "meses": "mar–may",
     "publicado": "23-jun-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/1048911/000104891126000050/fdx-earningsreleasefy2026q4.htm"
      },
      {
       "t": "10-K",
       "url": "https://www.sec.gov/Archives/edgar/data/1048911/000104891126000105/fdx-20260531.htm"
      },
      {
       "t": "Call 23-jun"
      }
     ]
    },
    {
     "empresa": "UPS",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "28-jul-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/1090727/000162828026049912/exhibit991-earningspressre.htm"
      },
      {
       "t": "Tablas financieras",
       "url": "https://www.sec.gov/Archives/edgar/data/1090727/000162828026049912/exhibit992-financialstatem.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/1090727/000162828026053249/ups-20260630.htm"
      },
      {
       "t": "Call 28-jul"
      }
     ]
    },
    {
     "empresa": "Union Pacific",
     "fiscal": "2T 2026",
     "meses": "abr–jun",
     "publicado": "23-jul-2026",
     "docs": [
      {
       "t": "Nota de resultados",
       "url": "https://www.sec.gov/Archives/edgar/data/100885/000010088526000249/a2026-07x238xkex991earning.htm"
      },
      {
       "t": "10-Q",
       "url": "https://www.sec.gov/Archives/edgar/data/100885/000010088526000250/unp-20260630.htm"
      },
      {
       "t": "Call 23-jul y conferencia 16-sep"
      }
     ]
    }
   ],
   "metodo": "Trimestre natural: cada compañía se asigna al trimestre natural con el que comparte más días de su periodo fiscal. FedEx entra con su 4T del ejercicio fiscal 2026 (mar–may), que aún consolida FedEx Freight; desde el 1-jun-2026 su ejercicio cierra en diciembre, jun–dic 2026 es un año de transición de 7 meses y su guidance es de año natural 2026 y operaciones continuadas (sin Freight). UPS y Union Pacific cierran en junio. Cifras según las publican las compañías; los cálculos propios van marcados. Las referencias del 1T proceden del informe anterior, en formato antiguo. La conferencia de Union Pacific del 16 de septiembre se refiere al 3T y se presenta por separado.",
   "glosario": [
    {
     "t": "ADV",
     "d": "Paquetes diarios medios: volumen del trimestre dividido entre los días operativos."
    },
    {
     "t": "Ingreso por pieza / yield",
     "d": "Ingreso medio por paquete (o por libra o envío); recoge tarifa, mix y recargos."
    },
    {
     "t": "Recargo de combustible",
     "d": "Suplemento indexado al precio del combustible que se repercute al cliente con poco desfase."
    },
    {
     "t": "Carload",
     "d": "Unidad de volumen ferroviario: un vagón o, en intermodal, un contenedor o remolque."
    },
    {
     "t": "Intermodal",
     "d": "Contenedores que combinan ferrocarril y camión; doméstico (carga interior) o internacional (importación y exportación por puerto)."
    },
    {
     "t": "Ratio operativo (OR)",
     "d": "Gastos operativos sobre ingresos; cuanto más bajo, más eficiente el ferrocarril."
    },
    {
     "t": "LTL",
     "d": "Carga fraccionada que no llena un camión; muy ligada a la actividad industrial."
    },
    {
     "t": "De minimis",
     "d": "Exención arancelaria para envíos de bajo valor, eliminada por EE.UU. para China en 2025 y luego con carácter general."
    }
   ]
  }
 ]
};
