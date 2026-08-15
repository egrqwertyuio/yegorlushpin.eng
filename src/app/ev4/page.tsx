'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Zap, Trophy, Battery, Gauge, AlertTriangle, Wrench } from 'lucide-react'
import ProjectGallery from '@/components/ProjectGallery'

const ev4Gallery = [
  { type: 'image' as const, src: '/images/projects/BearcatsElectricRacing/AccumulatorRenders/Accumulator_Exploded_Labeled.jpg', alt: 'EV4 accumulator labeled exploded view' },
  { type: 'image' as const, src: '/images/projects/BearcatsElectricRacing/AccumulatorRenders/Accumulator_Exploded_Clean.jpg', alt: 'EV4 accumulator exploded isometric' },
  { type: 'image' as const, src: '/images/projects/BearcatsElectricRacing/AccumulatorRenders/Accumulator_Front_Cutaway.jpg', alt: 'EV4 accumulator front cutaway' },
  { type: 'image' as const, src: '/images/projects/BearcatsElectricRacing/AccumulatorRenders/Accumulator_Angle_Cutaway.jpg', alt: 'EV4 accumulator angled cutaway' },
  { type: 'image' as const, src: '/images/projects/BearcatsElectricRacing/AccumulatorRenders/Module_28s4p_TrapPack.jpg', alt: '28s4p module bus bar layout' },
  { type: 'image' as const, src: '/images/projects/BearcatsElectricRacing/AccumulatorRenders/Accumulator_In_Chassis.jpg', alt: 'Accumulator installed in the EV4 chassis' },
  { type: 'image' as const, src: '/images/projects/BearcatsElectricRacing/BusBars/image0.jpeg', alt: 'Busbar assembly' },
  { type: 'image' as const, src: '/images/projects/BearcatsElectricRacing/BusBars/image1.jpeg', alt: 'Busbar testing' },
  { type: 'image' as const, src: '/images/projects/BearcatsElectricRacing/BusBars/image2.jpeg', alt: 'Fusible link' },
  { type: 'video' as const, src: '/images/projects/BearcatsElectricRacing/BusBars/linktesting.mov', alt: 'Fusible link testing video' },
  { type: 'image' as const, src: '/images/projects/BearcatsElectricRacing/3dModels/ModuleSpacerBlock_4Assembly_dwg1.png', alt: 'Module spacer block assembly' },
  { type: 'image' as const, src: '/images/projects/BearcatsElectricRacing/3dModels/HVIL_recepticle_dwg1.png', alt: 'HVIL receptacle drawing' },
]

const ev5BenchGallery = [
  { type: 'video' as const, src: '/images/projects/BearcatsElectricRacing/SelfTesting/CellThermalTest.mp4', alt: 'Cell thermal test walkthrough' },
  { type: 'image' as const, src: '/images/projects/BearcatsElectricRacing/SelfTesting/SingleCellTestRig.jpg', alt: 'Single cell Kelvin-clamp test fixture on the BK Precision 8601 load' },
  { type: 'image' as const, src: '/images/projects/BearcatsElectricRacing/SelfTesting/CellChargingSetup.jpg', alt: 'Individual cell charging setup before pack parallel top-off' },
  { type: 'image' as const, src: '/images/projects/BearcatsElectricRacing/SelfTesting/ThermalChamberSetup.jpg', alt: 'Foil-insulated thermal test enclosure with ESP32 DAQ and dashboard laptop' },
  { type: 'image' as const, src: '/images/projects/BearcatsElectricRacing/SelfTesting/EnclosureInterior.jpg', alt: 'Empty thermal enclosure interior, foam and gold mylar lining' },
  { type: 'image' as const, src: '/images/projects/BearcatsElectricRacing/SelfTesting/EnclosureInteriorWithCell.jpg', alt: 'Cell loaded in the thermal enclosure with thermocouples' },
  { type: 'image' as const, src: '/images/projects/BearcatsElectricRacing/SelfTesting/ThermocoupleRig.jpg', alt: 'Six-channel thermocouple breakout wired to the ESP32 DAQ' },
  { type: 'image' as const, src: '/images/projects/BearcatsElectricRacing/SelfTesting/TestDashboard.jpg', alt: 'Custom BK 8601 dashboard with live thermal map' },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-cyber-yellow text-xs uppercase tracking-widest">
      {children}
    </span>
  )
}

function StatChip({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="cyber-card px-4 py-3 flex items-center gap-3">
      <Icon className="w-4 h-4 text-cyber-yellow flex-shrink-0" />
      <div>
        <p className="text-white text-sm font-semibold leading-tight">{value}</p>
        <p className="text-gray-500 text-xs font-mono">{label}</p>
      </div>
    </div>
  )
}

function ResultsTable() {
  const rows = [
    { cell: 'RS50', cap1c: '5.00 Ah', dT: '+9.8 °C', trip: '1.90 Ah', frac: '38%', r0: '6.3 mΩ', heat: '~15.8 W' },
    { cell: 'JP40', cap1c: '3.95 Ah', dT: '+3.6 °C ⚠', trip: '1.89 Ah', frac: '48%', r0: '6.7 mΩ', heat: '~16.8 W' },
    { cell: 'EVE 50PL', cap1c: '5.03 Ah', dT: '~10–11 °C', trip: '1.76 Ah', frac: '35%', r0: '7.2 mΩ', heat: '~18.0 W' },
  ]
  return (
    <div className="border border-gray-800 overflow-x-auto">
      <table className="w-full text-sm min-w-[560px]">
        <thead>
          <tr className="border-b border-gray-800 bg-cyber-yellow/5">
            <th className="text-left px-3 py-2 font-mono text-gray-500 text-xs uppercase tracking-wider">Cell (Article 01)</th>
            <th className="text-right px-3 py-2 font-mono text-gray-500 text-xs uppercase tracking-wider">1C Capacity</th>
            <th className="text-right px-3 py-2 font-mono text-gray-500 text-xs uppercase tracking-wider">1C ΔT</th>
            <th className="text-right px-3 py-2 font-mono text-gray-500 text-xs uppercase tracking-wider">50A Trip Cap.</th>
            <th className="text-right px-3 py-2 font-mono text-gray-500 text-xs uppercase tracking-wider">Frac. of 1C</th>
            <th className="text-right px-3 py-2 font-mono text-gray-500 text-xs uppercase tracking-wider">Corrected R0</th>
            <th className="text-right px-3 py-2 font-mono text-gray-500 text-xs uppercase tracking-wider">Heat @ 50A</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.cell} className="border-b border-gray-800/50 last:border-0 hover:bg-cyber-yellow/5 transition-colors">
              <td className="px-3 py-2 text-white font-medium">{r.cell}</td>
              <td className="px-3 py-2 text-right text-gray-300 font-mono text-xs">{r.cap1c}</td>
              <td className="px-3 py-2 text-right text-gray-300 font-mono text-xs">{r.dT}</td>
              <td className="px-3 py-2 text-right text-gray-300 font-mono text-xs">{r.trip}</td>
              <td className="px-3 py-2 text-right text-gray-300 font-mono text-xs">{r.frac}</td>
              <td className="px-3 py-2 text-right text-cyber-yellow font-mono text-xs">{r.r0}</td>
              <td className="px-3 py-2 text-right text-cyber-orange font-mono text-xs">{r.heat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function EV4Page() {
  return (
    <div className="min-h-screen bg-cyber-bg py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-cyber-yellow hover:text-cyber-yellow-bright transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span className="font-mono">Back to Projects</span>
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionLabel>// Bearcats Electric Racing</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mt-3 mb-4">
            Battery Systems: <span className="text-cyber-yellow">EV4 &amp; EV5</span>
          </h1>
          <p className="text-gray-400 max-w-3xl leading-relaxed">
            Two generations of Bearcats Electric Racing&apos;s Formula SAE electric car, from my side: the EV4
            high-voltage accumulator, built and shown at CEAS Expo 2026, and the EV5 cell-characterization
            program I&apos;m running now to pick the next pack&apos;s cell and configuration.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            <StatChip icon={Zap} label="EV4 Pack Max" value="588 VDC" />
            <StatChip icon={Gauge} label="EV4 Peak Discharge" value="80 kW" />
            <StatChip icon={Trophy} label="CEAS Expo 2026" value="1st Place" />
            <StatChip icon={Battery} label="EV4 Pack Config" value="140s4p" />
          </div>
        </motion.div>

        {/* ============ EV4 ============ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="px-2 py-1 bg-cyber-yellow/20 border border-cyber-yellow text-cyber-yellow text-xs font-mono">
              EV4 · 2025–2026
            </span>
            <span className="px-2 py-1 bg-cyber-orange/20 border border-cyber-orange text-cyber-orange text-xs font-mono">
              Built · 1st Place, CEAS Expo 2026
            </span>
          </div>
          <h2 className="section-heading">HV Accumulator</h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            Supported the design, drafting, and validation of the EV4 high-voltage accumulator. As part of a
            9-person effort, I contributed busbar drafting, fusible-link validation, and 3D CAD work, shown at
            CEAS Expo 2026 where Bearcats Electric Racing took 1st place in the Student Organization category.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 max-w-2xl">
            <div className="cyber-card p-3">
              <p className="text-gray-500 text-xs font-mono uppercase">Pack</p>
              <p className="text-white text-sm">140s4p, 560× P30B</p>
            </div>
            <div className="cyber-card p-3">
              <p className="text-gray-500 text-xs font-mono uppercase">Voltage</p>
              <p className="text-white text-sm">588V max / 350V min</p>
            </div>
            <div className="cyber-card p-3">
              <p className="text-gray-500 text-xs font-mono uppercase">Discharge</p>
              <p className="text-white text-sm">80kW peak / 120A cont.</p>
            </div>
            <div className="cyber-card p-3">
              <p className="text-gray-500 text-xs font-mono uppercase">Module</p>
              <p className="text-white text-sm">28s4p, 112× P30B</p>
            </div>
          </div>

          <h3 className="text-cyber-yellow font-mono text-sm uppercase tracking-wider mb-3">What I Did</h3>
          <ul className="space-y-2 mb-6 max-w-3xl">
            {[
              'Drafted busbar and fusible-link manufacturing drawings for the pack’s overcurrent protection: nickel and copper bus bar geometry, the busbar board PCB, and the fusible-link strips.',
              'Validated fusible-link dimensions by measuring their trip behavior on the bench with an oscilloscope, checking real trip current against the drawing’s design margin.',
              '3D-modeled battery pack components in CAD (module spacer blocks, HVIL receptacles, spacer/lid assemblies, and washers) that went into the released drawing set.',
              'Supported physical integration of the finished HV accumulator assembly into the EV4 chassis.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="w-1.5 h-1.5 bg-cyber-yellow rounded-full flex-shrink-0 mt-1.5" />
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>

          <ProjectGallery items={ev4Gallery} title="EV4 HV Accumulator" />

          <p className="text-gray-500 text-sm mt-4">
            Team: Patrick Mumford (design lead), Owen Halburnt, Michael Corbo, Will Mattis, Peter Bohlen,
            Neil Dighe, Rewat Katwal, Quan Nguyen, and myself.
          </p>
        </motion.section>

        {/* ============ EV5 ============ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="px-2 py-1 bg-cyber-yellow/20 border border-cyber-yellow text-cyber-yellow text-xs font-mono">
              EV5 · 2026–2027
            </span>
            <span className="px-2 py-1 bg-purple-500/20 border border-purple-400 text-purple-300 text-xs font-mono">
              In Progress · Cell Testing Phase
            </span>
          </div>
          <h2 className="section-heading">Battery Cell Characterization Program</h2>
          <p className="text-gray-500 text-sm font-mono mb-6">
            By Yegor Lushpin and Hayden Geiger
          </p>

          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            Before EV5&apos;s pack config is locked, every candidate 21700/18650 cell has to be bench-tested for
            capacity, DCIR across SOC and temperature, and thermal behavior. That data feeds a pack-config
            sweep (every valid series/parallel combination against weight and voltage limits) and MATLAB/Ansys
            simulations to size the pack and its cooling.
          </p>

          <h3 className="text-cyber-yellow font-mono text-sm uppercase tracking-wider mb-3">Bench Architecture</h3>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            A BK Precision 8601 electronic load runs each test article through a Kelvin-clamped copper-lug
            fixture. Six thermocouples (five along the cell, one ambient) feed an ESP32 DAQ over serial, and a
            dashboard I wrote controls the load, logs per-article data, and renders a live thermal map of the
            cell. Cells sit inside a foil-and-foam insulated enclosure sealed with granite weights during
            higher-current runs.
          </p>

          <ProjectGallery items={ev5BenchGallery} title="EV5 Cell Characterization Bench" />

          <h3 className="text-cyber-yellow font-mono text-sm uppercase tracking-wider mb-3 mt-8">Test Procedure</h3>
          <ol className="space-y-2 mb-6 max-w-3xl">
            {[
              'Charge cells individually on an off-the-shelf charger, then finish balancing to 4.2V in parallel on a bench supply.',
              'Rest 30–60 minutes, then attach thermocouples (5 along the cell, 1 ambient outside the enclosure).',
              '1C capacity test: discharge at 1C to a 2.5V floor.',
              'Rated-current capacity test: discharge at 10C (the most current we were permitted) until a 60°C thermal cutoff.',
              'Discharge at 1C to 50% SOC to prep for DCIR.',
              'DCIR pulse test: 1A for 30s, 50A for 10s, then 1A for 10s more, simulating a pulse current draw.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="font-mono text-cyber-yellow/70 text-xs mt-0.5 flex-shrink-0 w-4">{i + 1}.</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-gray-500 text-sm max-w-3xl mb-8">
            Every run is coded to terminate at the 2.5V floor and the 60°C cutoff (FSAE EV.8.5.2), attended by
            at least two people, with a water container and gloves on standby for the rated-current test.
          </p>

          {/* Kelvin sense bug */}
          <div className="cyber-card p-6 mb-8 border-cyber-orange/40">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-cyber-orange flex-shrink-0" />
              <span className="font-mono text-cyber-orange text-xs uppercase tracking-widest">Debugging the Rig</span>
            </div>
            <h4 className="text-white font-semibold mb-2">The 4-wire Kelvin sense wasn&apos;t actually Kelvin</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Early DCIR readings came back far higher than any cell&apos;s datasheet. I measured the fixture
              itself with a precision multimeter (voltage drop between the cell contact point and the load at
              20A), using a wire soldered to a fusible link and spot-welded to a cell as the voltage tap.
              Calculated resistance: <strong className="text-white">2.772 mΩ per side, 5.544 mΩ for the whole rig</strong>.
              The copper-to-cell contact was friction-held and likely oxidizing, so the &quot;4-wire&quot; connection
              wasn&apos;t actually sensing at the cell terminal.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Fix: spot-weld nickel fusible-link tabs directly to the cell terminals and solder sense wires to
              those. Re-running DCIR at 95% SOC with the new sense wires vs. the old fixture gave{' '}
              <strong className="text-white">13.32 mΩ vs. 8.7 mΩ</strong>, a 4.6 mΩ delta close to the
              calculated 5.4 mΩ buffer, confirming the diagnosis. (Couldn&apos;t reproduce the comparison at 50%
              SOC yet, still open.)
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-cyber-yellow">Verdict:</strong> every cell gets retested with spot-welded
              sense wires. Data collected on the old fixture is being treated as unreliable until it can be
              re-checked against the corrected baseline.
            </p>
          </div>

          <h3 className="text-cyber-yellow font-mono text-sm uppercase tracking-wider mb-3">Thermocouple Calibration</h3>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            Type-K exposed welded-junction thermocouples (0.2mm conductors) for fast response, a direct lesson
            from EV4, where slower TCs low-pass-filtered high-current transients. Ice-bath calibration: TC6 (the
            in-bath reference) read +1.85°C at a bath that wasn&apos;t truly 0°C, so TC1–TC5 were each given their
            own offset against TC6 (−1.15 / −0.77 / −0.82 / −1.02 / −1.02 °C) rather than assuming a single
            global correction, the most accurate calibration achievable without lab-grade equipment.
          </p>

          <h3 className="text-cyber-yellow font-mono text-sm uppercase tracking-wider mb-3">Results So Far</h3>
          <p className="text-gray-500 text-sm mb-4 max-w-3xl">
            Three candidate cells, article 01 each. R0 is corrected with the 5.544 mΩ rig-resistance margin
            from the Kelvin-sense fix above. Treat as provisional pending the spot-welded-sense retest.
          </p>
          <div className="mb-8">
            <ResultsTable />
          </div>

          <h3 className="text-cyber-yellow font-mono text-sm uppercase tracking-wider mb-3">Endurance Simulation &amp; Telemetry</h3>
          <p className="text-gray-300 leading-relaxed mb-4 max-w-3xl">
            To sanity-check candidate pack configurations before EV5 has its own energy-meter data, I built
            early endurance lap simulations and calibrated them against energy-meter telemetry from other
            teams running comparable accumulator configs, a rough stand-in reference rather than primary
            decision data, until real EV5 telemetry exists.
          </p>
          <div className="cyber-card p-3 mb-8 max-w-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/projects/BearcatsElectricRacing/Telemetry/EnduranceSimTelemetry.png"
              alt="Endurance speed map, speed vs distance, and power distribution vs telemetry"
              className="w-full h-auto"
            />
          </div>

          <div className="cyber-card p-4 flex items-start gap-3">
            <Wrench className="w-4 h-4 text-cyber-yellow flex-shrink-0 mt-0.5" />
            <p className="text-gray-400 text-sm leading-relaxed">
              FSAE rules compliance (fusing, sensor placement, voltage limits) is still being worked through
              against this test data, and gets finalized once cell testing wraps up.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
