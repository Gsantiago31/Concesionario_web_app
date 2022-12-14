import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Rol, RolRelations, Usuario} from '../models';
import {UsuarioRepository} from './usuario.repository';

export class RolRepository extends DefaultCrudRepository<
  Rol,
  typeof Rol.prototype._id,
  RolRelations
> {

  public readonly esta_asociado: HasManyRepositoryFactory<Usuario, typeof Rol.prototype._id>;

  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(Rol, dataSource);
    this.esta_asociado = this.createHasManyRepositoryFactoryFor('esta_asociado', usuarioRepositoryGetter,);
    this.registerInclusionResolver('esta_asociado', this.esta_asociado.inclusionResolver);
  }
}
