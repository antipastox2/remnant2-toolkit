import { RelicFragmentItem } from './types/RelicFragmentItem'

export const relicFragmentItems: RelicFragmentItem[] = [
  {
    category: 'relicfragment',
    name: 'Ammo Pickups',
    imagePath: '/items/relicfragments/ammo_pickups.png',
    id: 'j1aele',
    dlc: 'base',
    tags: ['Ammo Reserves'],
    description: 'Ammo Pickups, +30% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Ammo Reserves',
    imagePath: '/items/relicfragments/ammo_reserves.png',
    id: '3aqiq5',
    dlc: 'base',
    tags: ['Ammo Reserves'],
    description: 'Ammo Reserves, +20% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Armor Effectiveness',
    imagePath: '/items/relicfragments/armor_effectiveness.png',
    id: '7u1bma',
    dlc: 'base',
    tags: ['Damage Reduction'],
    description: 'Armor Effectiveness, +10% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
    armorPercent: 0.1,
  },
  {
    category: 'relicfragment',
    name: 'Blight Resistance',
    imagePath: '/items/relicfragments/blight_resistance.png',
    id: '8q8xe3',
    dlc: 'base',
    tags: ['Armor Increase', 'Damage Reduction'],
    description: 'Blight Resistance, +30% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Casting Speed',
    saveFileSlug: 'castspeed',
    imagePath: '/items/relicfragments/casting_speed.png',
    id: '51y6ih',
    dlc: 'base',
    tags: ['Mod Cast Speed', 'Skill Cast Speed'],
    description: 'Casting Speed, +20% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Charge Melee Cost',
    imagePath: '/items/relicfragments/charge_melee_cost.png',
    id: 'fuikyq',
    dlc: 'base',
    tags: ['Charged Melee', 'Stamina'],
    description: 'Charge Melee Cost, -30% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Consumable Duration',
    imagePath: '/items/relicfragments/consumable_duration.png',
    id: 'xqklut',
    dlc: 'base',
    description: 'Consumable Duration, +20% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Consumable Speed',
    imagePath: '/items/relicfragments/consumable_speed.png',
    id: 'omefk5',
    dlc: 'base',
    tags: ['Relic Use Speed'],
    description: 'Consumable Speed, +15% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Damage Reduction',
    imagePath: '/items/relicfragments/damage_reduction.png',
    id: '1pddio',
    dlc: 'base',
    tags: ['Damage Reduction'],
    description: 'Damage Reduction, +5% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Elemental Damage',
    imagePath: '/items/relicfragments/elemental_damage.png',
    id: 'erp2mp',
    dlc: 'base',
    tags: ['Status Effect'],
    description: 'Elemental Damage, +10% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Elemental Resistance',
    imagePath: '/items/relicfragments/elemental_resistance.png',
    id: 'j7k57r',
    dlc: 'base',
    tags: ['Damage Reduction'],
    description: 'Elemental Resistance, +10% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
    bleedResistance: 10,
    fireResistance: 10,
    shockResistance: 10,
    blightResistance: 10,
    toxinResistance: 10,
  },
  {
    category: 'relicfragment',
    name: 'Grey Health Rate',
    imagePath: '/items/relicfragments/grey_health_rate.png',
    id: 'aci99s',
    dlc: 'base',
    tags: ['Grey Health'],
    description: 'Grey Health Rate, +20% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Healing Effectiveness',
    imagePath: '/items/relicfragments/healing_effectiveness.png',
    id: 'y52c32',
    dlc: 'base',
    tags: ['Healing Effectiveness'],
    description: 'Healing Effectiveness, +20% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Health',
    imagePath: '/items/relicfragments/health.png',
    id: 'j87rzn',
    dlc: 'base',
    tags: ['Health'],
    description: 'Health, +15% (x1.15) at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
    healthPercent: 0.15,
  },
  {
    category: 'relicfragment',
    name: 'Melee Attack Speed',
    imagePath: '/items/relicfragments/melee_attack_speed.png',
    id: 't8jgpe',
    dlc: 'base',
    tags: ['Melee Attack Speed'],
    description: 'Melee Attack Speed, +15% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Melee Critical Chance',
    saveFileSlug: 'meleecritchance',
    imagePath: '/items/relicfragments/melee_critical_chance.png',
    id: 'm16fn9',
    dlc: 'base',
    tags: ['Critical Chance', 'Melee Critical Chance'],
    description: 'Melee Critical Chance, +10% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Melee Critical Damage',
    saveFileSlug: 'meleecritdamage',
    imagePath: '/items/relicfragments/melee_critical_damage.png',
    id: '77ch7i',
    dlc: 'base',
    tags: ['Melee Critical Damage', 'Critical Damage'],
    description: 'Melee Critical Damage, +15% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Melee Damage',
    imagePath: '/items/relicfragments/melee_damage.png',
    id: 'yu7d57',
    dlc: 'base',
    tags: ['Melee Damage'],
    description: 'Melee Damage, +15% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Mod Cost',
    imagePath: '/items/relicfragments/mod_cost.png',
    id: 's8pkj3',
    dlc: 'base',
    tags: ['Mod Cost'],
    description: 'Mod Cost, -10% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Mod Damage',
    imagePath: '/items/relicfragments/mod_damage.png',
    id: 'zkr2us',
    dlc: 'base',
    tags: ['Mod Damage'],
    description: 'Mod Damage, +10% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Mod Duration',
    imagePath: '/items/relicfragments/mod_duration.png',
    id: 'c2t1p6',
    dlc: 'base',
    tags: ['Mod Duration'],
    description: 'Mod Duration, +15% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Ranged Critical Chance',
    saveFileSlug: 'rangedcritchance',
    imagePath: '/items/relicfragments/ranged_critical_chance.png',
    id: 'dp184t',
    dlc: 'base',
    tags: ['Critical Chance'],
    description: 'Ranged Critical Chance, +7.5% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Ranged Critical Damage',
    saveFileSlug: 'rangedcritdamage',
    imagePath: '/items/relicfragments/ranged_critical_damage.png',
    id: 'w5jmys',
    dlc: 'base',
    tags: ['Critical Damage'],
    description: 'Ranged Critical Damage, +15% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Ranged Damage',
    imagePath: '/items/relicfragments/ranged_damage.png',
    id: 'wlnbc1',
    dlc: 'base',
    tags: ['Ranged Damage'],
    description: 'Ranged Damage, +10% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Ranged Fire Rate',
    imagePath: '/items/relicfragments/ranged_fire_rate.png',
    id: 'w8ruyt',
    dlc: 'base',
    tags: ['Fire Rate'],
    description: 'Ranged Fire Rate, +10% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Recoil',
    imagePath: '/items/relicfragments/recoil.png',
    id: 'ygdexg',
    dlc: 'base',
    tags: ['Recoil'],
    description: 'Recoil, -30% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Revive Speed',
    imagePath: '/items/relicfragments/revive_speed.png',
    id: '0jam5w',
    dlc: 'base',
    description: 'Revive Speed, +25% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Shield Effectiveness',
    imagePath: '/items/relicfragments/shield_effectiveness.png',
    id: 'alp59n',
    dlc: 'base',
    description: 'Shield Effectiveness, +20% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Skill Cooldown',
    imagePath: '/items/relicfragments/skill_cooldown.png',
    id: '2bqp66',
    dlc: 'base',
    tags: ['Reduce Skill Cooldown'],
    description: 'Skill Cooldown, -10% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Skill Damage',
    imagePath: '/items/relicfragments/skill_damage.png',
    id: 'fuhykd',
    dlc: 'base',
    tags: ['Skill Damage'],
    description: 'Skill Damage, +10% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Skill Duration',
    imagePath: '/items/relicfragments/skill_duration.png',
    id: '7c8uka',
    dlc: 'base',
    tags: ['Skill Duration'],
    description: 'Skill Duration, +10% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Spread Recovery',
    imagePath: '/items/relicfragments/spread_recovery.png',
    id: 'yk8dng',
    dlc: 'base',
    tags: ['Spread'],
    description: 'Spread Recovery, +30% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Stagger Damage',
    imagePath: '/items/relicfragments/stagger_damage.png',
    id: '74x7jt',
    dlc: 'base',
    tags: ['Stagger'],
    description: 'Stagger Damage, +20% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Stamina',
    imagePath: '/items/relicfragments/stamina.png',
    id: 'qqmdc0',
    dlc: 'base',
    tags: ['Stamina'],
    description: 'Stamina, +15% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
    staminaPercent: 0.15,
  },
  {
    category: 'relicfragment',
    name: 'Stamina Cost',
    imagePath: '/items/relicfragments/stamina_cost.png',
    id: 'lbtjq3',
    dlc: 'base',
    tags: ['Stamina'],
    description: 'Stamina Cost, -20% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Stamina Recovery Delay',
    imagePath: '/items/relicfragments/stamina_recovery_delay.png',
    id: '0y36lm',
    dlc: 'base',
    tags: ['Stamina'],
    description: 'Stamina Recovery Delay, -30% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Weakspot Damage',
    imagePath: '/items/relicfragments/weakspot_damage.png',
    id: 'oszz4u',
    dlc: 'base',
    tags: ['Weakspot Damage'],
    description: 'Weakspot Damage, +15% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Weapon Spread',
    imagePath: '/items/relicfragments/weapon_spread.png',
    id: 'oiiiu2',
    dlc: 'base',
    tags: ['Spread'],
    description: 'Weapon Spread, -15% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Weapon Swap',
    imagePath: '/items/relicfragments/weapon_swap.png',
    id: 'h9e463',
    dlc: 'base',
    description: 'Weapon Swap, +20% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
]
