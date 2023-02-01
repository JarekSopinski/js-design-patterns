class Creature
{
  constructor(attack, health)
  {
    this.attack = attack;
    this.health = health;
    this.alive = this.health > 0;
    // todo
  }
}

class Game
{
  constructor(damageStrategy)
  {
    this.damageStrategy = damageStrategy;
  }

  springTrapOn(creature)
  {
    this.damageStrategy.damage(creature);
    return creature.alive;
  }
}

class DamageStrategy
{
  damage(creature)
  {
    if (creature.health <= 0)
    {
      creature.alive = false;
    }
  }
}

class ConstantDamageStrategy extends DamageStrategy
{
  damage(creature)
  {
    // todo
  }
}

class GrowingDamageStrategy extends DamageStrategy
{
  damage(creature)
  {
    // todo
  }
}
GrowingDamageStrategy.impact = {};